"""
Icon'ları otomatik oluşturup kaydetmek için script
"""
import os
from PIL import Image, ImageDraw
import math

def create_fibonacci_spiral_icon(size):
    """Fibonacci spiral icon oluştur"""
    # Yeni image oluştur
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Eflatun gradient arka plan
    center = size // 2
    for y in range(size):
        for x in range(size):
            dist = math.sqrt((x - center)**2 + (y - center)**2)
            max_dist = size / 2
            ratio = min(dist / max_dist, 1.0)
            
            # Eflatun gradient
            r = int(155 - ratio * 30)  # 155 -> 125
            g = int(89 - ratio * 20)   # 89 -> 69
            b = int(182 - ratio * 50)  # 182 -> 132
            
            img.putpixel((x, y), (r, g, b, 255))
    
    # Fibonacci spiral çiz
    phi = 1.618  # Altın oran
    scale = size / 600  # Ölçekleme
    
    # 5 katmanlı spiral
    layers = [
        {'width': 12, 'opacity': 255, 'scale': 0.95},
        {'width': 8, 'opacity': 191, 'scale': 0.95},
        {'width': 6, 'opacity': 153, 'scale': 0.95},
        {'width': 4, 'opacity': 128, 'scale': 0.95},
        {'width': 3, 'opacity': 102, 'scale': 0.95},
    ]
    
    for layer in layers:
        points = []
        angle = 0
        radius = 1
        
        for i in range(200):
            x = center + math.cos(angle) * radius * scale * layer['scale']
            y = center + math.sin(angle) * radius * scale * layer['scale']
            
            if 0 <= x < size and 0 <= y < size:
                points.append((int(x), int(y)))
            
            angle += 0.1
            radius *= 1.01  # Spiral büyümesi
            
            if radius * scale * layer['scale'] > size / 2:
                break
        
        # Smooth bezier curves ile çiz
        if len(points) > 2:
            for i in range(len(points) - 1):
                x1, y1 = points[i]
                x2, y2 = points[i + 1]
                color = (255, 255, 255, layer['opacity'])
                draw.line([x1, y1, x2, y2], fill=color, width=int(layer['width']))
    
    # Merkez nokta
    draw.ellipse([center-4, center-4, center+4, center+4], fill=(255, 255, 255, 255))
    draw.ellipse([center-2, center-2, center+2, center+2], fill=(255, 255, 255, 204))
    
    return img

def main():
    """Icon'ları oluştur ve kaydet"""
    output_dir = os.path.dirname(os.path.abspath(__file__))
    
    print("Icon'lar olusturuluyor...")
    
    # 512x512 icon
    print("512x512 icon olusturuluyor...")
    icon512 = create_fibonacci_spiral_icon(512)
    icon512_path = os.path.join(output_dir, 'icon-512.png')
    icon512.save(icon512_path, 'PNG')
    print(f"[OK] Kaydedildi: {icon512_path}")
    
    # 192x192 icon
    print("192x192 icon olusturuluyor...")
    icon192 = create_fibonacci_spiral_icon(192)
    icon192_path = os.path.join(output_dir, 'icon-192.png')
    icon192.save(icon192_path, 'PNG')
    print(f"[OK] Kaydedildi: {icon192_path}")
    
    print("\n[OK] Tum icon'lar basariyla olusturuldu!")
    print(f"Konum: {output_dir}")

if __name__ == '__main__':
    try:
        main()
    except ImportError:
        print("[HATA] PIL (Pillow) kutuphanesi bulunamadi!")
        print("Kurulum icin: pip install Pillow")
        print("\nAlternatif: icon-generator.html dosyasini tarayicida acip butonlara tiklayin")
    except Exception as e:
        print(f"[HATA] Hata: {e}")

