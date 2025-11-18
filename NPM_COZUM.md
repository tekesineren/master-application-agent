# npm Çalıştırma Sorunu - Çözüm

## Sorun
PowerShell'de npm çalıştırırken şu hata alıyorsunuz:
```
npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system.
```

## Çözüm

PowerShell'i **Yönetici olarak** açın ve şu komutu çalıştırın:

### Yöntem 1: Execution Policy Değiştir (Önerilen)

1. **PowerShell'i Yönetici olarak açın**:
   - Windows tuşuna basın
   - "PowerShell" yazın
   - Sağ tıklayın → "Yönetici olarak çalıştır"

2. Şu komutu çalıştırın:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
   
3. "Y" (Yes) yazın ve Enter'a basın

4. PowerShell'i kapatıp yeniden açın

5. Test edin:
   ```powershell
   npm --version
   ```

### Yöntem 2: npm'i Doğrudan Çalıştır

Execution policy'yi değiştirmek istemiyorsanız, npm'i şu şekilde çalıştırabilirsiniz:

```powershell
& "C:\Program Files\nodejs\npm.cmd" --version
```

Veya web app'i çalıştırmak için:
```powershell
cd c:\Users\user\master-application-agent\web-app
& "C:\Program Files\nodejs\npm.cmd" install
& "C:\Program Files\nodejs\npm.cmd" run dev
```

### Yöntem 3: Command Prompt Kullan

PowerShell yerine **Command Prompt (cmd)** kullanabilirsiniz:

1. Windows tuşu + R
2. `cmd` yazın ve Enter
3. Şu komutları çalıştırın:
   ```cmd
   cd c:\Users\user\master-application-agent\web-app
   npm install
   npm run dev
   ```

## Hangi Yöntemi Seçmeliyim?

- **Yöntem 1** (Önerilen): Kalıcı çözüm, npm her zaman çalışır
- **Yöntem 2**: Geçici çözüm, her seferinde uzun komut yazmanız gerekir
- **Yöntem 3**: En kolay, Command Prompt kullanırsanız sorun olmaz

## Sonraki Adımlar

npm çalıştıktan sonra:

```powershell
cd c:\Users\user\master-application-agent\web-app
npm install
npm run dev
```

Web uygulaması `http://localhost:3000` adresinde açılacak!

