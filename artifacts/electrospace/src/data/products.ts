export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  sku: string;
  inStock: boolean;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Waveshare 2.13\" E-Ink Display",
    price: 1799,
    category: "Displays",
    rating: 4.5,
    sku: "WS-EINK-213",
    inStock: true,
    image: "/images/ws-eink.png",
    description: "High contrast e-ink display suitable for low power applications and makers building smart tags."
  },
  {
    id: "2",
    name: "ESP32 Dev Board WiFi+BT",
    price: 399,
    originalPrice: 499,
    category: "Development Boards",
    rating: 4.8,
    sku: "ES-ESP32-DEV",
    inStock: true,
    image: "/images/esp32.png",
    description: "Powerful WiFi and Bluetooth module for all your IoT needs. The quintessential maker board."
  },
  {
    id: "3",
    name: "Raspberry Pi Pico",
    price: 449,
    category: "Development Boards",
    rating: 4.7,
    sku: "RPI-PICO-H",
    inStock: true,
    image: "/images/rpi-pico.png",
    description: "A fast, versatile, and highly affordable microcontroller board built using the RP2040 chip."
  },
  {
    id: "4",
    name: "USB-C PD Trigger Module",
    price: 249,
    category: "Power Modules",
    rating: 4.3,
    sku: "PM-USBC-PD1",
    inStock: true,
    image: "/images/usbc-pd.png",
    description: "Extract the exact voltage you need from any USB-C Power Delivery source."
  },
  {
    id: "5",
    name: "NRF24L01 Wireless Module",
    price: 129,
    category: "Wireless",
    rating: 4.2,
    sku: "WL-NRF24-01",
    inStock: false,
    image: "/images/nrf24l01.png",
    description: "Reliable 2.4GHz wireless transceiver for point-to-point communication between microcontrollers."
  },
  {
    id: "6",
    name: "OLED 0.96\" Display",
    price: 159,
    category: "Displays",
    rating: 4.6,
    sku: "DIS-OLED-096",
    inStock: true,
    image: "/images/oled-096.png",
    description: "Crisp and bright I2C OLED display perfect for minimal UI and data logging."
  },
  {
    id: "7",
    name: "STM32 Blue Pill",
    price: 299,
    category: "Development Boards",
    rating: 4.4,
    sku: "STM-F103-BP",
    inStock: true,
    image: "/images/stm32.png",
    description: "Step up your embedded skills with this powerful 32-bit ARM Cortex-M3 board."
  },
  {
    id: "8",
    name: "TP4056 Battery Charging Module",
    price: 49,
    category: "Power Modules",
    rating: 4.5,
    sku: "PM-TP4056",
    inStock: true,
    image: "/images/tp4056.png",
    description: "Safely charge your single-cell lithium batteries with this staple module."
  },
  {
    id: "9",
    name: "Arduino Nano Compatible",
    price: 249,
    originalPrice: 299,
    category: "Development Boards",
    rating: 4.6,
    sku: "ARD-NANO-V3",
    inStock: true,
    image: "/images/arduino-nano.png",
    description: "The classic maker board in a breadboard-friendly form factor."
  },
  {
    id: "10",
    name: "1.54\" SPI TFT Display",
    price: 349,
    category: "Displays",
    rating: 4.3,
    sku: "DIS-TFT-154",
    inStock: true,
    image: "/images/tft-154.png",
    description: "Full color high refresh SPI display for richer interfaces."
  }
];
