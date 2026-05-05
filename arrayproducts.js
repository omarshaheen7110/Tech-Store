var features = [
    {
        id: 1,
        name: `HUAWEI MatePad 11.5`,
        image: `download (4).png`,
        price: 13000,
        discount: 0.2,
        description: `Display: Smooth 120Hz FullView Display.

Design: Ultra-slim 6.85mm metal unibody.

Performance: Powerful processor for multitasking and gaming.

Experience: Supports Detachable Keyboard and M-Pencil.`
    },
    {
        id: 2,
        name: `HUAWEI M-Pencil`,
        image: `download (5).png`,
        price: 2000,
        discount: 0,
        description: `Precision: 4,096 levels of pressure sensitivity for natural writing and drawing.

Latency: Ultra-low latency ensures a highly responsive and fluid experience.

Pairing: Seamless magnetic pairing and wireless charging on your tablet.

Smart Features: Support for double-tap to switch tools and Take Snippet features.`
    },
    {
        id: 3,
        name: `HUAWEI Smart Keyboard`,
        image: `download (8).png`,
        price: 3000,
        discount: 0.2,
        description: `Design: Lightweight and durable with a high-quality finish for a premium feel.

Connectivity: Seamless magnetic pairing and instant Bluetooth connection.

Keystrokes: Comfortable 1.5mm key travel for a laptop-like typing experience.

Efficiency: Features over 40 shortcut combinations for faster navigation and productivity.`
    },
    {
        id: 4,
        name: `HUAWEI FreeClip 2`,
        image: `download (7).png`,
        price: 9000,
        discount: 0.1,
        description: `Design: Innovative C-bridge Design for a comfortable, open-ear listening experience.

Audio: Dual-magnetic dynamic driver delivering powerful sound and clear vocals.

Battery Life: Up to 36 hours of total playback with the charging case.

Durability: IP54 sweat and water resistance, making it perfect for workouts.`
    },
    {
        id: 5,
        name: `MacBook Air M3`,
        image: `download (22).png`,
        price: 30000,
        discount: 0.2,
        description: `Processor: Supercharged by the M3 chip with an 8-core CPU and up to 10-core GPU.

Display: Brilliant 13.6-inch or 15.3-inch Liquid Retina display with 500 nits of brightness.

Design: Strikingly thin and light fanless design for silent, all-day performance.

Battery Life: Up to 18 hours of battery life on a single charge.`
    },
    {
        id: 6,
        name: `Asus Rog Zephyrus`,
        image: `download (11).png`,
        price: 30000,
        discount: 0.4,
        description: `Processor: Up to AMD Ryzen 9 or Intel Core Ultra 9.

Graphics: NVIDIA GeForce RTX 40 Series GPUs.

Display: ROG Nebula Display with up to 240Hz refresh rate and OLED technology.

Cooling: Intelligent Cooling system with Tri-Fan technology and liquid metal.`
    },
    {
        id: 7,
        name: `Microsoft Surface Laptop`,
        image: `download (1).png`,
        price: 36000,
        discount: 0.25,
        description: `Processor: Snapdragon X Elite and Plus processors for AI-accelerated performance.

Display: PixelSense Flow touchscreen with 120Hz refresh rate and HDR support.

AI Power: Dedicated NPU for Copilot+ PC experiences.

Battery Life: Up to 20-22 hours of video playback on a single charge.`
    },
    {
        id: 8,
        name: `Dell XPS 15 9510`,
        image: `download (6).png`,
        price: 32000,
        discount: 0.1,
        description: `Processor: 11th Gen Intel Core i7 or i9 processors.

Graphics: NVIDIA GeForce RTX 3050 Ti.

Display: 15.6-inch InfinityEdge display with up to 3.5K OLED resolution.

Build: CNC machined aluminum and a carbon fiber palm rest.`
    },
    {
        id: 9,
        name: `Samsung Galaxy S24 Ultra`,
        image: `download (12).png`,
        price: 19000,
        discount: 0.15,
        description: `Processor: Snapdragon 8 Gen 3 for Galaxy.

Camera: Pro-grade 200MP main sensor with enhanced AI Zoom.

Display: 6.8-inch Dynamic AMOLED 2X with ultra-tough Gorilla Armor.

AI Features: Galaxy AI for Circle to Search, Live Translate, and Note Assist.`
    },
    {
        id: 10,
        name: `Huawei Pura 90 Pro`,
        image: `download (23).png`,
        price: 15000,
        discount: 0.11,
        description: `Display: 6.9-inch LTPO OLED, 120Hz, Kunlun Glass.

Processor: Kirin 9030S with HarmonyOS 6.1.

Memory: 16GB RAM and up to 1TB Storage.

Battery: 6,500 mAh with 120W Wired and 80W Wireless charging.`
    },
    {
        id: 11,
        name: `Google Pixel 10 Pro`,
        image: `download (13).png`,
        price: 25000,
        discount: 0.015,
        description: `Display: 6.3-inch Super Actua OLED, 1-120Hz, 3000 nits.

Processor: Google Tensor G5 custom-built for AI.

Cameras: 50MP Main and 48MP Ultrawide and 48MP Telephoto with 5x Optical Zoom.

Battery: 5,100 mAh with 45W Fast Charging.`
    },
    {
        id: 12,
        name: `Xiaomi 16 Ultra`,
        image: `download (17).png`,
        price: 31000,
        discount: 0.2,
        description: `Display: 6.73-inch LTPO AMOLED, 12-bit color, 4000 nits brightness.

Processor: Snapdragon 8 Elite Gen 2.

Camera: Quad 50MP system with Leica Optics and a massive 1-inch main sensor.

Battery: 6,000 mAh with 120W Wired and 80W Wireless charging.`
    },
    {
        id: 13,
        name: `Apple Watch Series 11`,
        image: `download (16).png`,
        price: 10000,
        discount: 0.2,
        description: `Sizes: Available in 42mm and 46mm cases.

Display: Wide-angle LTPO3 OLED Always-On Retina display.

Brightness: Up to 2,000 nits.

Durability: Ion-X glass 2x more scratch-resistant than Series 10.`
    },
    {
        id: 14,
        name: `Huawei Watch GT 6 Pro`,
        image: `download (19).png`,
        price: 12500,
        discount: 0.2,
        description: `Design: Titanium case with Sapphire Crystal glass.

Display: 1.47-inch AMOLED, 3,000 nits brightness.

Battery: Up to 21 days maximum.

Sensors: ECG, Heart Rate, SpO2, Skin Temp, and Barometer.`
    },
    {
        id: 15,
        name: `Oura Ring Gen 4`,
        image: `download (20).png`,
        price: 17000,
        discount: 0.05,
        description: `Design: Ultra-slim Titanium, 100% circular.

Weight: Less than 3 grams.

Battery: Up to 10 days on a single charge.

Sensors: Heart Rate, SpO2, Skin Temperature, and Respiratory Rate.`
    },
    {
        id: 16,
        name: `Ray-Ban Meta`,
        image: `download (21).png`,
        price: 11000,
        discount: 0.06,
        description: `Camera: 12MP Ultra-wide for high-quality POV photos and videos.

Audio: Open-ear speakers and 5-mic array for clear calls and music.

AI: Built-in Meta AI with Vision that identifies objects and translates text.

Battery: 4-6 hours per charge and up to 36 hours with the charging case.`
    },
    {
        id: 0,
        name: `LENOVO LOQ`,
        image: `download.png`,
        price: 20000,
        discount: 0,
        description: `Processor: Up to 14th Gen Intel Core i7-14700HX or AMD Ryzen 7 8000 Series.

Graphics: NVIDIA GeForce RTX 40 and 50 Series GPUs.

Memory: High-speed DDR5 RAM up to 5600MHz.

Display: 15.6 inch FHD 144Hz 165Hz refresh rate and 100% sRGB color accuracy.`
    },
    {
        id: 17,
        name: `IPHONE 17`,
        image: `download (3).png`,
        price: 80000,
        discount: 0,
        description: `Display: 6.3-inch Super Retina XDR OLED, 120Hz ProMotion, Always-On.

Processor: A19 Chip 3nm with Apple Intelligence optimization.

Main Camera: 48MP Fusion and 48MP Ultra Wide with 4K Dolby Vision.

Battery: All-day battery life with USB-C fast charging.`
    }
];