
let game;

function init()
{
    game = new Game();
}

class Player
{
    constructor(index)
    {
        this.index = index;
        this.atTile = 0;
        this.pawn - document.getElementsByClassName("pawn" + index)[0];
        this.pawn.style.display = "block";
    }
}

class Tile
{
    constructor(div)
    {
        this.div = div;
        this.goto = -1;
    }
}

class Game{
    constructor()
    {
        this.selectplayersDiv = document.getElementsByClassName("selectplayers")[0];
        this.winnerDiv = document.getElementsByClassName("winner")[0];
        this.playerturnDiv = document.getElementsByClassName("playerturn")[0];
        this.rollDiv = document.getElementsByClassName("roll")[0];
        this.mainDiv = document.getElementsByClassName("main")[0];
        this.boardDiv = document.getElementsByClassName("board")[0];
        this.boardoverlayDiv = document.getElementsByClassName("boardoverlay")[0];

        this.tiles = [];
        this.players = [];
        this.playerturn = 0;
        this.setupBoard();

        
    }
    setupBoard()
    {
        //1 = right, 0 = up, 3 = left
        let path = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
            3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1,
            1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3
            , 3, 3, 3, 3, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 1]

        let x = 0;
        let y = 10;
        let tileSize = 55;

        for (var i = 0; i < path.length; i++)
        {
            let cmd = path[i];
            if (cmd == 1)
            {
                //right
                x++;
            }
            else if (cmd == 3)
            {
                //left
                x--;
            }
            else if (cmd == 0)
            {
                //up
                y--;
            }

            let div = this.makeBoardDiv(x * tileSize, y * tileSize, i + 1);

            let tile = new Tile(div);
            this.tiles.push(tile);
        }    

        this.setupGotos();
    }
    setupGotos()
    {
        // let op deze tegelnummers beginnen bij 1 
        let goto = [[6, 14], [16, 4], [17, 23], [27, 33], [29, 10], [38, 43], [39, 20], [45, 34]];


        for (var i = 0; i < goto.length; i++)
        {
            let element = goto[i];

            let start = element[0] - 1;
            let end = element[1] - 1;

            let tile = this.tiles[start];
            tile.goto = end;
        }
       
        
    }
    start(amountOfPlayers)
    {   
        this.selectplayersDiv.visible = false; //selectplayers hide
        this.winnerDiv.visible = false;  //winner hide

        this.pawn.visible = false;   //pawns alle 4 hide -> selectie class pawn
        
    
        //players aanmaken

        
        for (var i = 0; i < amountOfPlayers; i++){
            let player = new Player(i);
            this.players.push(player);
        }
       

      
        
        
        //eerste beurt starten
        this.moveToNextPlayer();
        this.playerturn = -1;
        //playerturn = -1;
    }
    moveToNextPlayer()
    { 
        playerturn += 1; //playerturn ophogen naar de volgende speler
        if (this.playerturn > amountOfPlayers){
            playerturn = 1;
        }
        
        this.draw();
        //playerturn groter is dan het aantal spelers?
        // dan willen we terug naar de eerste speler

        // draw aanroepen
    }
    draw()
    {
        this.setPawn
        // voor elke speler
        // pawn neerzetten op de huidige locatie van de speler
        //setPawn
    }
    roll()
    {

        let dice = Math.floor(Math.random() * 6 + 1);
        return dice;

        //1-6 gooien slaan we op in een variable lokaal

        //rolldiv achtergrond plaatje aanpassen dice1 - dice 6 afhanklijk van de roll
        // pakken we onze speler, en verplaatsten die
        //atile

        //als de speleer op vakje 50 komt, index 49! dan wint die.
        //en later het winscherm tonen
        // en we zetten het speler nummer in de windiv textcontent


        //draw

        //goto afhandelen van de nieuwe tile waarop we op staan
        // pak de tile 
        // kijk naar de goto of die geen -1 -> if(nummertje != -1)
        //attile player naar de goto zetten

        //draw

        //gaan we naar de volgende speler
    }   
    setPawn(playerI, atile)
    {
        //halen we de tile op voor aTile
        //die heeft style met left/top in het px formaat 10px;

        //player heeft een pawn html element ebwaard
        // die heeft een style, en daar kun je dus de left/top van de tile opzetten



    }
    makeBoardDiv(x, y, tileDisplayNumber)
    {
        let div = document.createElement("div");

        div.className = "tile";
        div.style.left = x + "px";
        div.style.top = y + "px";
        div.textContent = tileDisplayNumber;

        this.boardDiv.appendChild(div);

        return div;
    }
}  