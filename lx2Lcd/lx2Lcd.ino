  #include <LiquidCrystal.h>
  
  #define CDS_PIN 0

  LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

  void setup() 
  {
    Serial.begin(9600);
    pinMode(CDS_PIN, INPUT);
  }

  void loop()
  {
    int reading = analogRead(CDS_PIN);

    float voltage = ((long)reading * 5000) / 1024;

    float microamp = (voltage * 1000) / 1000;

    float lx = microamp / (290 / 100);

    Serial.print(lx);
    Serial.println(" lx");
    
    lcd.begin(16,2);
    lcd.print(lx);
    lcd.print(" lx");
    
    lcd.setCursor(0,1);
    if(lx>1500) {
      lcd.print("too bright!");
    }
    else if(lx>750) {
      lcd.print("office?");
    }
    else if(lx>300) {
      lcd.print("PC room?");
    }
    else if(lx>150) {
      lcd.print("elevator?");
    }
    else if(lx>75) {
      lcd.print("warehouse?");
    }
    else {
      lcd.print("too gloomy!");
    }
  
    delay(1000);
  }
  
