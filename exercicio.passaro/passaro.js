var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    
    scene: {
    preload: preload,
    create: create,
    update: update
    }
    };
    
    var game = new Phaser.Game(config);

    var passarinho;
    
    //mostrando para o pc a localização da imagem
    function preload() {
        this.load.image('fundo', 'exercicio.passaro/assets/fundo.png');
        this.load.spritesheet('passaro', 'exercicio.passaro/assets/bird-red.png',{frameWidth: 75, frameHeight: 75});    
    
    }
    //adicionando a imagem, especificando as dimensões
    function create() {
        this.add.image(400,300, 'fundo').setScale(1.2);
        passarinho = this.add.sprite(100,300,"bird").setScale(1.2);
        
        this.anims.create({
            key: "fly",
            frames: this.anims.generateFrameNumbers("bird", {start: 0, end: 7})
        });

       passarinho.anims.play("fly",true);
    
        //guardar o passaro numa variável
    
        //transformando a variável
    
    
    }
    //atualizando a variável passaro
    function update() {
    
        if(passarinho.x === 100){
            passarinho.setFlip(false,false);
            passarinho.ida = true;
        };
        if(passarinho.x < 100 && passarinho.ida === true){
            passarinho.x += 5;
        };
        if(passarinho.x === 700){
            passarinho.setFlip(false,false);
            passarinho.ida = true;
        };
        if(passarinho.x > 100 && passarinho.ida === false){
            passarinho.x -=5;
        };
    }