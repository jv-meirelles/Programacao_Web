var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <title>Informações |&nbsp;James Webb</title>
          <link rel="apple-touch-icon" href="IMG/favicon.png" />
          <link rel="icon" href="IMG/favicon.png" />
          <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" href="CSS/style.css" />
          <meta charSet="utf-8" />
          <header>
            <div id="tete-site">
              <div className="titre-site" align="center">
                <a href="index.php" className="nosoulignes">
                  <h1 className="text9 blanc gras maj titre-site">
                    JAMES WEBB
                  </h1>
                </a>
              </div>
              <nav className="menu-nav" align="center">
                <nav className="menu-nav" align="center">
                  <ul>
                    <li className="btn">
                      <a href="index.html"><img src="IMG/home.png" className="nav-icon" alt="Welcome" /></a>
                    </li>
                    <li className="btn">
                      <a href="info.html"><img src="IMG/info-active.png" className="nav-icon" alt="Info" /></a>
                    </li>
                    <li className="btn">
                      <a href="photo.html"><img src="IMG/images.png" className="nav-icon" alt="Photo" /></a>
                    </li>
                    <li className="btn">
                      <a href="ressources.html"><img src="IMG/ressources.png" className="nav-icon" alt="Ressource" /></a>
                    </li>
                  </ul>
                </nav>
              </nav></div>
          </header>
          <div id="contenu-site">
            <h2 className="autotextinfo maj text9 blanc gras">Apresentando o Telescópio James Webb
            </h2>
            <div className="boxarticle">
              <section className="articleinfo">
                <h3 className="titrearticle">O que é o Telescópio James Webb?</h3>
                <img className="imgarticle" src="IMG/imgPageInfo/JWST.em.gif" alt="jw animado" />
                <p className="textarticle">O Telescópio Espacial James Webb é o mrlhor observatório de ciência espacial do mundo
                  no mundo.
                  Tem a altura de um prédio de três andares e o comprimento de uma quadra de tênis! Ele é tão
                  grande que foi dobrado como um origami para caber no foguete de lançamento.
                  A tecnologia inovadora do Telescópio Espacial James Webb permitirá
                  para estudar todas as fases da história cósmica - de dentro do nosso sistema solar
                  até as galáxias observáveis ​​mais distantes do universo primordial.
                  O Webb Infrared Telescope explorará uma ampla gama de questões científicas para
                  nos ajudam a entender as origens do universo e nosso lugar nele.
                  O Webb é um programa internacional liderado pela NASA com seu
                  parceiros, a Agência Espacial Européia (ESA) e a Agência Espacial Canadense (CSA).
                </p>
              </section>
              <section className="articleinfo">
                <h3 className="titrearticle"> Histórico do Projeto Webb</h3>
                <img className="imgarticle" src="IMG/imgPageInfo/Webb_integracao_final.jpg" alt="integacao-final" />
                <p className="textarticle">Em setembro de 1989, o Space Telescope Science Institute (STScI) e a NASA
                  organizado em conjunto
                  o workshop Next Generation Space Telescope no STScI, reunindo mais de 130 astrônomos e engenheiros.
                  O grupo propôs que a NASA estudasse a viabilidade de um telescópio de 10 metros, resfriado
                  passivamente, localizado no infravermelho próximo e colocado em uma órbita alta da Terra, ou de um
                  Telescópio de 16 metros baseado na Lua, para estudar galáxias com alto desvio para o vermelho.
                  Em 1996, um comitê de 18 membros liderado pelo astrônomo Alan Dressler recomendou oficialmente
                  NASA para desenvolver um telescópio espacial que observaria o céu na luz infravermelha. Seria
                  equipado com um espelho de mais de quatro metros de diâmetro e operaria em uma órbita bem localizada
                  além da lua da Terra.
                  Três equipes de cientistas e engenheiros chegaram à conclusão de que o
                  telescópio proposto funcionaria.
                  Em 2002, a agência selecionou as equipes responsáveis ​​pela construção dos instrumentos e
                  grupo de astrônomos que dariam conselhos sobre a construção. Ainda em 2002, o
                  telescópio foi oficialmente chamado de Telescópio Espacial James Webb, em homenagem a
                  o administrador da NASA que liderou o desenvolvimento do programa Apollo.
                  A construção do Webb começou em 2004. A montagem final e os testes ocorreram em 2018 e
                  2019 para garantir que Webb cumprirá perfeitamente sua complexa implantação e sua missão
                  cientista uma vez no espaço, pois seria mais longe do que os humanos já viajaram
                  e, portanto, não poderia ser mantido</p>
              </section>
              <section className=" articleinfo">
                <h3 className="titrearticle">O lançamento e comissionamento do telescópio</h3>
                <img className="imgarticle" src="IMG/imgPageInfo/lancamento_telescopio.png" alt="lancamento-do-telescopio" />
                <p className="textarticle">Webb foi lançado com sucesso do espaçoporto da ESA na Guiana Francesa
                  em 25 de dezembro de 2021 às 07:20 EST (2021-12-25 12:20 GMT/UTC). Em seguida, a implantação da máquina
                  espaço ocorreu durante as duas semanas após o lançamento. Webb cruzado com
                  sucesso de seu complexo e inédito processo de implantação, indo desde sua configuração
                  plataforma de lançamento para sua configuração operacional enquanto se dirigia para a órbita ao redor do
                  segundo ponto de Lagrange (L2). Esta jornada levou 29 dias por aproximadamente um milhão de milhas.
                  Finalmente, o comissionamento ocorreu durante os 6 meses seguintes ao lançamento. Depois de
                  implantação completa do Webb e resfriamento cuidadosamente gerenciado, seus espelhos têm sido muito
                  alinhados com precisão e seus instrumentos calibrados, todos como vários limites de
                  temperaturas-chave foram alcançadas e as temperaturas estabilizadas.
                  Após esta implantação e comissionamento bem-sucedidos, o Telescópio Webb inicia sua missão
                  científico.
                </p>
              </section>
              <section className=" articleinfo">
                <h3 className="titrearticle">Exploração de mundos distantes e do sistema solar</h3>
                <img className="imgarticle" src="IMG/imgPageInfo/composicao-da-atmosfera.jpg" alt="Exo planeta: WASP-96" />
                <p className="textarticle">O Telescópio Webb é uma ferramenta poderosa para estudar o universo próximo.
                  Os cientistas usarão o Webb para estudar os planetas e outros corpos de
                  nosso sistema solar para determinar sua origem e evolução.
                  Webb também observará exoplanetas (planetas que giram em torno de uma estrela diferente da nossa
                  Sol)
                  localizados nas zonas habitáveis ​​de suas estrelas, ou seja, as regiões onde um planeta pode
                  conter água líquida em sua superfície. Ele poderá determinar se as assinaturas de habitabilidade podem
                  estar presente
                  e onde estão localizados. Usando uma técnica chamada espectroscopia de transmissão,
                  o observatório examinará a luz das estrelas filtrada pelas atmosferas planetárias
                  para saber mais sobre sua composição química.
                </p>
              </section>
              <section className="articleinfo">
                <h3 className="titrearticle">Em busca da luz das primeiras galáxias do Universo</h3>
                <img className="imgarticle" src="IMG/imgPageInfo/foto-legal-da-galaxia.png" alt="galaxias SMACS 0723 " />
                <p className="textarticle"> O telescópio Webb observará diretamente parte do espaço e do tempo
                  nunca vi
                  anteriormente. Ele observará o momento em que as primeiras estrelas e galáxias
                  formada há mais de 13,5 bilhões de anos. luz ultravioleta e
                  visível emitido pelos primeiros objetos luminosos foi esticado ou "deslocado para o vermelho"
                  ("desviado para o vermelho") pela contínua expansão do universo e chega hoje como luz
                  infravermelho.
                  O Webb foi projetado para "ver" essa luz infravermelha com resolução e sensibilidade sem
                  anterior.
                </p>
              </section>
            </div>
          </div>
          <footer>
            <div id="pied-site" className="reveal">
              <div className="copyright reveal-1" align="center">
                <p className="blanc">
                  Site criado por João Vítor Meirelles para o curso de Progrmação para web da prof. Joyce.
                </p>
              </div>
            </div>
          </footer>
        </div>
      );
    }
  });