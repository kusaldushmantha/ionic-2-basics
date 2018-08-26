export class SettingsService {

    private altBackground = false;

    setBackground(isAlt: boolean){
        this.altBackground = isAlt;
    }

    isAltBackGround(){
        return this.altBackground;
    }

}