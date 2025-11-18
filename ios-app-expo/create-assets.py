from PIL import Image, ImageDraw
import math
import os

def create_spiral_icon(size):
    """Hipnoz spiral icon oluştur"""
    img = Image.new('RGBA', (size, size), (102, 126, 234, 255))  # #667eea
    draw = ImageDraw.Draw(img)
    center = size // 2
    
    # Eflatun gradient arka plan
    for y in range(size):
        for x in range(size):
            dist = math.sqrt((x - center)**2 + (y - center)**2)
            max_dist = size / 2
            ratio = min(dist / max_dist, 1.0)
            r = int(102 - ratio * 20)
            g = int(126 - ratio * 15)
            b = int(234 - ratio * 40)
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

# Assets klasörü oluştur
os.makedirs('assets', exist_ok=True)

# Icon oluştur (1024x1024 - Expo standard)
print("Icon oluşturuluyor...")
icon = create_spiral_icon(1024)
icon.save('assets/icon.png')
print("✅ assets/icon.png")

# Splash screen (aynı icon, farklı boyut)
print("Splash screen oluşturuluyor...")
splash = create_spiral_icon(2048)
splash.save('assets/splash.png')
print("✅ assets/splash.png")

# Adaptive icon (Android için)
print("Adaptive icon oluşturuluyor...")
adaptive = create_spiral_icon(1024)
adaptive.save('assets/adaptive-icon.png')
print("✅ assets/adaptive-icon.png")

# Favicon (web için)
print("Favicon oluşturuluyor...")
favicon = create_spiral_icon(48)
favicon.save('assets/favicon.png')
print("✅ assets/favicon.png")

print("✅ Tüm asset'ler oluşturuldu!")
print("📁 assets/ klasörüne kaydedildi")

