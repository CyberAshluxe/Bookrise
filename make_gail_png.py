import zlib
import struct
from pathlib import Path

width = 400
height = 400

# Create a simple portrait-style PNG image.
# Background and basic face silhouette.
img = bytearray()
for y in range(height):
    img.append(0)
    for x in range(width):
        if 120 <= x <= 280 and 100 <= y <= 270:
            r, g, b = 47, 42, 36
        elif 120 <= x <= 280 and 300 <= y <= 360:
            r, g, b = 200, 155, 100
        else:
            r, g, b = 244, 232, 216
        img.extend((r, g, b))

# Add a simple hair region and eyes using direct pixel writes.
for y in range(80, 260):
    for x in range(120, 260):
        if (x - 180) ** 2 + (y - 140) ** 2 <= 11000 and y < 220:
            idx = 1 + (y * width + x) * 3
            img[idx:idx + 3] = b'\xc8\x9b\x64'

for y in range(150, 175):
    for x in range(155, 175):
        idx = 1 + (y * width + x) * 3
        img[idx:idx + 3] = b'\x2f\x2a\x24'
    for x in range(235, 255):
        idx = 1 + (y * width + x) * 3
        img[idx:idx + 3] = b'\x2f\x2a\x24'

# Build PNG chunks.
def chunk(tag, data):
    return struct.pack('>I', len(data)) + tag + data + struct.pack('>I', zlib.crc32(tag + data) & 0xFFFFFFFF)

png = bytearray(b'\x89PNG\r\n\x1a\n')
png.extend(chunk(b'IHDR', struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0)))
png.extend(chunk(b'IDAT', zlib.compress(bytes(img), 9)))
png.extend(chunk(b'IEND', b''))
Path('public/gail.png').write_bytes(png)
print('created public/gail.png')
