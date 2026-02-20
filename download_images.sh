#!/bin/bash
# Curated Unsplash images for Seongsu promo page
# All selected for warm tones, luxury feel, clean composition

DIR="public/images/seongsu"
cd /Users/zemstone/.openclaw/workspace/projects/raemian-apgujeong

# S1 Mask Images (Hero sequence)
echo "=== S1 Masks ==="
# Seoul aerial golden hour
curl -sL "https://images.unsplash.com/photo-1617178388636-0f4e4ecbc4f4?w=1920&q=80" -o "$DIR/s1_mask_1.png"
echo "s1_mask_1 done"
# Seoul forest park aerial / green nature
curl -sL "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1920&q=80" -o "$DIR/s1_mask_2.png"
echo "s1_mask_2 done"
# Modern brick architecture
curl -sL "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1920&q=80" -o "$DIR/s1_mask_3.png"
echo "s1_mask_3 done"
# Luxury apartment night
curl -sL "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80" -o "$DIR/s1_mask_5.png"
echo "s1_mask_5 done"
# Seoul cityscape sunset (main bg)
curl -sL "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=1920&q=80" -o "$DIR/s1_mask_6.png"
echo "s1_mask_6 done"

# S3 Gallery Parallax (14 images)
echo "=== S3 Gallery ==="
# minimal cafe interior (2)
curl -sL "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80" -o "$DIR/s3_img_1.png"
curl -sL "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1920&q=80" -o "$DIR/s3_img_2.png"
echo "s3 cafe done"
# Seoul forest / green nature (2)
curl -sL "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80" -o "$DIR/s3_img_3.png"
curl -sL "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1920&q=80" -o "$DIR/s3_img_4.png"
echo "s3 forest done"
# brick building modern (2)
curl -sL "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80" -o "$DIR/s3_img_5.png"
curl -sL "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1920&q=80" -o "$DIR/s3_img_6.png"
echo "s3 brick done"
# luxury fashion store (2)
curl -sL "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80" -o "$DIR/s3_img_7.png"
curl -sL "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1920&q=80" -o "$DIR/s3_img_8.png"
echo "s3 fashion done"
# han river sunset
curl -sL "https://images.unsplash.com/photo-1546874177-9e664107314e?w=1920&q=80" -o "$DIR/s3_img_9.png"
echo "s3 river done"
# modern gallery interior white
curl -sL "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1920&q=80" -o "$DIR/s3_img_10.png"
echo "s3 gallery done"
# aerial city park green
curl -sL "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=1920&q=80" -o "$DIR/s3_img_11.png"
echo "s3 aerial park done"
# urban street golden hour
curl -sL "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80" -o "$DIR/s3_img_13.png"
echo "s3 urban done"
# architectural detail concrete
curl -sL "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=1920&q=80" -o "$DIR/s3_img_14.png"
echo "s3 arch done"
# rooftop terrace city view
curl -sL "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80" -o "$DIR/s3_img_15.png"
echo "s3 rooftop done"

# S4 Background
echo "=== S4 ==="
curl -sL "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80" -o "$DIR/s4_bg.png"
echo "s4 done"

# S5 Tab Slider (3 tabs x 3)
echo "=== S5 ==="
# Tab 1: Seoul forest nature park
curl -sL "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1920&q=80" -o "$DIR/s5_t1_1.jpg"
curl -sL "https://images.unsplash.com/photo-1503785640985-f62e3aeee448?w=1920&q=80" -o "$DIR/s5_t1_2.jpg"
curl -sL "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=1920&q=80" -o "$DIR/s5_t1_3.jpg"
echo "s5 t1 done"
# Tab 2: subway/transit modern
curl -sL "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1920&q=80" -o "$DIR/s5_t2_1.jpg"
curl -sL "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1920&q=80" -o "$DIR/s5_t2_2.jpg"
curl -sL "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1920&q=80" -o "$DIR/s5_t2_3.jpg"
echo "s5 t2 done"
# Tab 3: luxury boutique / premium shopping
curl -sL "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1920&q=80" -o "$DIR/s5_t3_1.jpg"
curl -sL "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80" -o "$DIR/s5_t3_2.jpg"
curl -sL "https://images.unsplash.com/photo-1528698827591-e19cef51a699?w=1920&q=80" -o "$DIR/s5_t3_3.jpg"
echo "s5 t3 done"

# S6
echo "=== S6 ==="
curl -sL "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80" -o "$DIR/s6_img.png"
echo "s6 img done"
# Panorama skyline (wide)
curl -sL "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=2400&q=80" -o "$DIR/s6_marque.png"
echo "s6 marque done"

# S7 International cases
echo "=== S7 ==="
# Brooklyn DUMBO
curl -sL "https://images.unsplash.com/photo-1555424681-b0ecf4fe19a5?w=1920&q=80" -o "$DIR/s7_img_1.png"
echo "s7_1 done"
# Shoreditch London
curl -sL "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80" -o "$DIR/s7_img_2.png"
echo "s7_2 done"
# Hudson Yards NY
curl -sL "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1920&q=80" -o "$DIR/s7_img_3.png"
echo "s7_3 done"

# S9 Special design
echo "=== S9 ==="
# architectural blueprint / design
curl -sL "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80" -o "$DIR/s9_img_1.png"
echo "s9_1 done"
# panoramic city park view
curl -sL "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80" -o "$DIR/s9_img_2.png"
echo "s9_2 done"

# S10 Outro background
echo "=== S10 ==="
curl -sL "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1920&q=80" -o "$DIR/s10_bg.png"
echo "s10 done"

echo "=== ALL DOWNLOADS COMPLETE ==="
