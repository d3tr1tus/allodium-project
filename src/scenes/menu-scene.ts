export class MenuScene extends Phaser.Scene {
    private background: Phaser.GameObjects.TileSprite;

    constructor() {
        super({ key: 'MenuScene' });
    }

    create(): void {
        this.background = this.add
            .tileSprite(this.cameras.main.width / 2 - 195, this.cameras.main.height / 2 - 300, 390, 600, 'background')
            .setOrigin(0, 0);
    }

    update(time: number): void {
        // this.background.tilePositionX = time * .2;
    }
}
