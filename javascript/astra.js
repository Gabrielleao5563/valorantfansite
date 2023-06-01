var nome = "Astra";

var biografia = "Astra, a Agente ganense, utiliza energias cósmicas para moldar o campo de batalha a seu bel-prazer. Com total domínio da sua forma astral e um talento estratégico nato, ela está sempre anos-luz à frente dos inimigos.";

var classe = "Controlador";

var nome_Q = "Pulso Nova";
var link_Q = "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt78e556d97ea93fc9/6036c92572c04c12c9563dff/RIFT21_Astra_Ability_Q.mp4";
var info_Q = "Posicione Estrelas na Forma Astral (X) ATIVE uma Estrela para detonar um Pulso Nova. O Pulso Nova carrega brevemente e depois estoura, causando concussão a todos os jogadores na área.";

var nome_E = "Nebulosa";
var link_E = "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3be9010588cba144/6036c924427f5d75042c3ae5/RIFT21_Astra_Ability_E_F.mp4";
var info_E = "Posicione Estrelas na Forma Astral (X) ATIVE uma Estrela para transformá-la em uma Nebulosa (fumaça). Utilize (F) em uma Estrela para dissipá-la, retornando a estrela para ser posicionada em um novo local após um período de tempo. Dissipar forma brevemente uma Nebulosa falsa na localização da Estrela antes de retornar.";

var nome_C = "Poço Gravitácional";
var link_C = "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltaba20d81cc601af4/6036c92599494e6c4f166b19/RIFT21_Astra_Ability_C.mp4";
var info_C = "Posicione Estrelas na Forma Astral (X) ATIVE uma Estrela para formar um Poço Gravitacional. Jogadores na área são puxados em direção ao centro antes de ele explodir, deixando frágeis todos que ainda estão presos no centro.";

var nome_X = "Divísa Cósmica";
var link_X = "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltca94f8d6f8e4c91d/6036c92499494e6c4f166b15/RIFT21_Astra_Ability_ULT.mp4";
var info_X = "ATIVE (X) para entrar na Forma Astral, em que você pode posicionar Estrelas com DISPARO ALTERNATIVO. As Estrelas podem ser reativadas depois para serem transformadas em Pulso Nova, Nebulosa ou Poço Gravitacional. Quando Divisa Cósmica estiver carregada, utilize o DISPARO SECUNDÁRIO na Forma Astral para começar a mirar e, depois, o DISPARO PRIMÁRIO para escolher dois locais. Após isso, uma Divisa Cósmica infinita surge e conecta os pontos selecionados. A Divisa Cósmica bloqueia disparos e abafa muito o som.";

//--------------------------------------------------

var agentimg = document.getElementById("agentimage");
var classtext = document.getElementById("classtext");
var classicon = document.getElementById("classicon");
var biograpy = document.getElementById("biograpy");
var vid = document.getElementById("screen");
var skillname = document.getElementById("skillname");
var skillicon = document.getElementById("skillicon");
var skillinfo = document.getElementById("skillinfo");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

function load(){
    document.title=String(nome + " - " + biografia);
    var nameforcode = nome.toLowerCase();
    var classeforcode = classe.toLowerCase();

    agentimg.src="../../images/" + nameforcode + ".png";
    classtext.innerHTML=classe.toUpperCase();
    classicon.src="../../icons/" + classeforcode + ".png";
    biograpy.innerHTML=biografia;

    btn1.src="../../icons/" + nameforcode + "_Q.png";
    btn2.src="../../icons/" + nameforcode + "_E.png";
    btn3.src="../../icons/" + nameforcode + "_C.png";
    btn4.src="../../icons/" + nameforcode + "_X.png";

    set_Q();
}

function set_Q(){
    skillname.innerHTML=nome_Q;
    skillinfo.innerHTML=info_Q;
    skillicon.src=String("../../icons/" + nome.toLowerCase() + "_Q.png");
    vid.src=link_Q;

    btn1.classList.remove("selected");
    btn2.classList.remove("selected");
    btn3.classList.remove("selected");
    btn4.classList.remove("selected");

    btn1.classList.add("selected");
}

function set_E(){
    skillname.innerHTML=nome_E;
    skillinfo.innerHTML=info_E;
    skillicon.src=String("../../icons/" + nome.toLowerCase() + "_E.png");
    vid.src=link_E;

    btn1.classList.remove("selected");
    btn2.classList.remove("selected");
    btn3.classList.remove("selected");
    btn4.classList.remove("selected");

    btn2.classList.add("selected");
}

function set_C(){
    skillname.innerHTML=nome_C;
    skillinfo.innerHTML=info_C;
    skillicon.src=String("../../icons/" + nome.toLowerCase() + "_C.png");
    vid.src=link_C;

    btn1.classList.remove("selected");
    btn2.classList.remove("selected");
    btn3.classList.remove("selected");
    btn4.classList.remove("selected");

    btn3.classList.add("selected");
}

function set_X(){
    skillname.innerHTML=nome_X;
    skillinfo.innerHTML=info_X;
    skillicon.src=String("../../icons/" + nome.toLowerCase() + "_X.png");
    vid.src=link_X;

    btn1.classList.remove("selected");
    btn2.classList.remove("selected");
    btn3.classList.remove("selected");
    btn4.classList.remove("selected");

    btn4.classList.add("selected");
}

//----------------------------------------------

document.addEventListener('keypress', function(e){
    if(e.key === "q" || e.key === "Q"){
        set_Q();
    }
    if(e.key === "e" || e.key === "E"){
        set_E();
    }
    if(e.key === "c" || e.key === "C"){
        set_C();
    }
    if(e.key === "x" || e.key === "X"){
        set_X();
    }
})