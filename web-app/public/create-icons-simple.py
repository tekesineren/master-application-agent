# -*- coding: utf-8 -*-
from PIL import Image, ImageDraw
import math

def create_spiral_icon(size):
    """Hipnoz spiral icon oluştur"""
    img = Image.new('RGBA', (size, size), (155, 89, 182, 255))
    draw = ImageDraw.Draw(img)
    center = size // 2
    
    # Eflatun gradient arka plan
    for y in range(size):
        for x in range(size):
            dist = math.sqrt((x - center)**2 + (y - center)**2)
            max_dist = size / 2
            ratio = min(dist / max_dist, 1.0)
            r = int(155 - ratio * 30)
            g = int(89 - ratio * 20)
            b = int(182 - ratio * 50)
            img.putpixel((x, y), (r, g, b, 255))
    
    # 5 katmanlı hipnoz spiral
    layers = [12, 8, 6, 4, 3]  # Kalınlıklar
    opacities = [255, 191, 153, 128, 102]  # Opaklıklar
    
    for layer_idx, (width, opacity) in enumerate(zip(layers, opacities)):
        scale = 0.95 - (layer_idx * 0.05)
        points = []
        angle = 0
        radius = 1
        
        for i in range(300):
            x = center + math.cos(angle) * radius * scale
            y = center + math.sin(angle) * radius * scale
            
            if 0 <= x < size and 0 <= y < size:
                points.append((int(x), int(y)))
            
            angle += 0.08
            radius *= 1.012
            
            if radius * scale > size / 2:
                break
        
        # Smooth çizgiler
        if len(points) > 1:
            for i in range(len(points) - 1):
                x1, y1 = points[i]
                x2, y2 = points[i + 1]
                color = (255, 255, 255, opacity)
                draw.line([x1, y1, x2, y2], fill=color, width=int(width * size / 512))
    
    # Merkez nokta
    dot_size = max(2, size // 128)
    draw.ellipse([center-dot_size*2, center-dot_size*2, center+dot_size*2, center+dot_size*2], 
                fill=(255, 255, 255, 255))
    draw.ellipse([center-dot_size, center-dot_size, center+dot_size, center+dot_size], 
                fill=(255, 255, 255, 204))
    
    return img

# Icon'ları oluştur
print("Icon'lar olusturuluyor...")

icon512 = create_spiral_icon(512)
icon512.save('icon-512.png', 'PNG')
print("[OK] icon-512.png kaydedildi")

icon192 = create_spiral_icon(192)
icon192.save('icon-192.png', 'PNG')
print("[OK] icon-192.png kaydedildi")

print("\n[OK] Tum icon'lar hazir!")

