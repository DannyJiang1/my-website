import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import "./Home.css";

function Home({ mobile }) {
  const [showText, setShowText] = useState(false);
  const [showCatCommand, setShowCatCommand] = useState(false);
  const [showActualHomePage, setShowActualHomePage] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const CURSOR_CLASS_NAME = "custom-type-animation-cursor";
  const cat_delay = 1000;
  const homePage_delay = 3000;

  const handlePageClick = () => {
    setShowActualHomePage(true);
    setShowText(false);
    setShowCatCommand(false);
  };

  useEffect(() => {
    setShowText(false);
    setShowCatCommand(false);
    setShowActualHomePage(false); // Reset state when component mounts
  }, []);

  useEffect(() => {
    if (showText) {
      // Show the second animation after a short delay
      const timer = setTimeout(() => {
        setShowCatCommand(true);
      }, cat_delay);

      return () => clearTimeout(timer); // Clean up the timer if the component unmounts
    }
  }, [showText]);

  useEffect(() => {
    if (showCatCommand) {
      // After the cat README.txt command is shown, wait for it to complete, then show the actual home page
      const timer = setTimeout(() => {
        setShowActualHomePage(true);
      }, homePage_delay);

      return () => clearTimeout(timer); // Clean up the timer if the component unmounts
    }
  }, [showCatCommand]);

  // Render the actual homepage if showActualHomePage is true
  if (showActualHomePage) {
    return (
      <div
        id="home-page"
        style={{
          flexDirection: mobile ? "column" : "row",
          alignItems: mobile ? "flex-start" : "center",
          justifyContent: mobile ? "flex-start" : "space-between",
        }}
      >
        <div
          id="home-text-area"
          style={{
            flex: mobile ? "none" : 1,
            maxWidth: "600px",
            paddingLeft: mobile ? "0px" : "50px",
            marginBottom: mobile ? "auto" : "0",
          }}
        >
          <div style={{ paddingBottom: "20px" }}>
            <TypeAnimation
              cursor={false}
              sequence={["Hey! I am Danny Jiang."]}
              speed={200}
              className={`${CURSOR_CLASS_NAME} terminal-text`}
              style={{
                fontSize: "30px",
              }}
            />
          </div>
          <div style={{ paddingBottom: "20px" }}>
            <TypeAnimation
              cursor={false}
              sequence={[1000, "CS Student @ Michigan Engineering"]}
              speed={200}
              className={`${CURSOR_CLASS_NAME} terminal-text`}
              style={{
                fontSize: "14px",
              }}
            />
          </div>
          <div>
            <TypeAnimation
              cursor={false}
              sequence={[
                "I am very passionate about AI and ML, and I love building and exploring machine learning applications. Check out my projects and experiences!",
              ]}
              speed={75}
              className={`${CURSOR_CLASS_NAME} terminal-text`}
              style={{
                fontSize: "20px",
              }}
            />
          </div>
        </div>
        <div
          id="portrait-container"
          style={{
            flex: mobile ? "none" : 1,
            justifyContent: mobile ? "center" : "center",
            alignSelf: mobile ? "flex-end" : "center",
          }}
        >
          <img
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            src="/my-picture.jpg"
            alt="Portrait"
            id="portrait"
            style={{
              maxWidth: mobile ? "350px" : "500px",
              display: isHovered ? "none" : "block",
            }}
          />
          <div
            style={{
              width: "151ch",
              fontSize: mobile ? "3px" : "5px",
              display: isHovered ? "block" : "none",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            %%%%%%%##****#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%###%%%%%####%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%%#################################%%%%%%%%%%
            %%%%%%%##****#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%###%%%%###%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#################################%%%%%%%%%%%
            %%%%%%%##****#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@%%%%%####%%%###%%%%%%%%%%%%%%%%%%%%@%%%%%%%%%%%%%%%%%%%#####%%%%%%%%%########%%%#####%%%%%%%%%%%%%%
            %%%%%%%##****##%%###%%%%%%%%%%%%%%%@@%%%%%%@@@@@@@@@#=-:...::=*###%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%##%%
            @@%%%%%#******************#####%%%%%%%%%%%@@@@@@@@@#=....
            ..:+%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#####%%
            @@@@%%#***+*********************###%%%%%%@@@@@@@@@@@*-........:*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#####%%%%
            %@@@%#**+++********##########***+**##%@%@@@@@@@@@@@@@@#*=---=*%%%%%%%%%%%%%%%%%%%@@@%%%%%%%%%@@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
            %%%%%%#*++++++=+++**####*********+++*%%@@@@@@@@@@@@@@@@@@%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@%@@@@@@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
            %%%%%%##*+++====+++******++++++++++*#%%%%@@@@@@@@@@@@@@@@@@%%%%%%%%@%%%%@%@@@@@@@@@@@@@@@@@@@@%%%%%%@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
            #%%%%###**++++=+++++++++++++++++**#%%@@%%@@@@@@@@@@@@@@%%%%%%%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@%%%%@@@@@@@@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@%%%%%%%%%%#
            =*#%###***+++++**####*******###%%%@@@@@@@@@@@@@@@@@@@@%%##############%%%%%%%%%%%%%%@@@@@@@@@%%@@@@@@@@@@@@@%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@@%%%%%*-..
            :+*####***++++*#%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@%#*********####*##############%%%%%%%%%%%%%%%@@@@@@@@@@@%%%%%%%%%%%%%%%%%%%%%%%@@@@@@%%%%%%%#-..
            =*#####********##%%%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@%#**********#******************#############%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@%%%@@@@@@@#=:.
            **#####*******##############%%%%%%%%%%@@@@@@@@@@@@@@@%%#**********#*******************####******####################%%%%%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@%
            *######******#######################%%%%%%%%%%%%%@@@@%%#*******************************##*********######*****#####*###############%%%%%%%@@@@@@@@@@@@@@
            *#######****#######################%%%%%%%%%%%%%%%%%%%%#******************+**+**#*++++*##********######****#######******######***#########%%%%@@@@@@@@@
            ##%%####***########################%%%%%%%%%%%%%%%%%%%##*******+++********+++**++***+****+****************###%%%%###*****###**************##%%@@@@@@%%%
            #%%%################################%%%%%%%%%%%%%%%%%%%#*++=++=:..-=+++**=-..+**++-:..:-=+++*********++**###%%%%%%##**********************##%@@@@@%%%%%
            %%%%################################%%%#%%%%%%%%%%%%%%***+**-:::=#*+#*#*+*-#=+*:--:...-=-++=--:::..:==**=+-:+#%%%%##*********************#%%@@@@%%%%###
            %%%%%##############################*-.....:+#%%%%#*++##**##=:.-:=+#@@%*##+**=++*+-:.....:-++****+==:+==::-*####%%%##********************#%%@@@@%%%%##**
            %%%%%%#############################+:..
            ..:+%%#**%%%%%+###+-::...:-+*+--====+=--...---=-:-==++=+*+**==++=+#%%%%%%##*******************##%@@@@%%%%##***
            %%%%%%%%############################+-....:-*%+=%%%##-:*@%###+=.:*+*%#*=-=*+=:+-=..::+:.:-.=#=.-==*##*+-+**+#%%%%%##*******************#%@@@@%%%%##****
            %@%%%%%%%###############################***#**++*+***==%%=+*%+:+#%#@%@%#+%#*#%+=:+===++-.::.##*-:=+*#*-++=**########******************#%%@@@@%%%%##****
            @@@%%%%%%##############################*%#%%%#**#**+:.:*:+%%@%*%*#@@%%##==-*#++**-.==++*-....*#-=-.++==**=*%-....:-+*****************##%%@@@%%%%%#*****
            @@@@%%%%%%################%%%%#########**#*##++*#=+=::+#=*#%%##+-#%%%=+##*+*+%%%*#-+*%#%@::....+--=::=+=**#:......:+###########******##%%@%%%%%%%#*****
            @@@@@%%%%################%%%%%############%#-=:.--::.:+-.-*=##%+-#@%++%+=-=+*+%#**#%@@%@@::.:-.+=:..::.--+=**::--+#@@@@@@@@@%%##*****##%%@%%%%%%%##****
            @@@@@%%%%################%%%%%########**##*-::...-:-:-*-..+++#*+--+#+:==+==+#%#*%%#@@@@@%--:+++=.........=*#*%@@@@@@@@@@@@@@@%##******#%@@@@@%%%%%%%%%%
            @@@@@%%%%##******########%%%%%#####*####*==...
            ...+::.:---:..-+--:.::..:-:-*#*%%*+%@@@@%.*:*-##+=....=.....:=*@@@@@@@@@@@@@@@%##******#%@@@@@@@@@@@@@@@
            @@@@@@%%%#******#########%%%%#####*##+++--:.:.:==:-:=:.:--=*#####*=-..:-+=+**#%%%%@@@@@-**+*#*#+-:-:.::.-:.:==*@@@@@@@@@@@@@@%#*******#%@@@@@@@@@@@@@@@
            @@@@@@@%%#*****#%%%%%%%%#=:...:=*##**=:::.=:=--=--:-#-:-=*%@@@%%%**+*+++=-=+**###%%#%%%*=@+-#*-=+*=*:.=**#:-#*@@@%%%@@@@@@@@@%#*******#%%@%%%%%%%%%@@@@
            @@@@@@@%%#*++*#%%@@@@@@@#=:....-*#%*::--=.*+#=:#+..=#%**%@%@@@@%%##**#+*+*#++**###%%@*#=@@@--++++=++%*@%#%*+=+.*@@#%%@@@@@@@@%#******################%@
            @@@@%%%%%##***#%%@@@@@@@@%#+++*#%%#=:-*++##*@@#=*-.=%@*@@@@@@@@##%##*++*+**#****#**#++-%@@@%*++#%#*%%+@##*+==+.=#+@#@@@@@@@@@%#*********#######****##%@
            %%%%%%%%%%###*#%%@@@@@@@@@@@@@@@%%*-+#+#%%%#@@@%-:::#@#%@@@@%@@@%####*++++++#****+*+*#@@@@@@@+:*@@@%+%%#*##+=+:-:::#@@@%%@@@@%#********##########%%@@@@
            @@@@@@%%%##***#%%@@@@@@@@@@@@@@%%%##%+%@@%@@%@@@%#*+%@@%@@@@@@@@%%*###*+****##**+=*#%%@@@@@@@@#@+-#@@*@@@@@@#+..:=*+++%###%%%#**++***##%@@#+==+#@@@@@@@
            @@@@@@@%#*****#%@@@@@@@@@@@@@@@#@#%#%%#@@@@@@@@@@@%@@@@@@@@@@@@%%#++**##*+++***+**##%%@@@@@@@@%@@@%#*++*#%###*%-:=::===--+*****+++++**###=..
            .:+#%%%%@
            @@@@@@@%#*****#%@@@@@@@@@@@@@@@%%*%%%%%#%%@@@%@%%@@@@@@@@@@@%%##%#*++=++*#***##***##%%@%@@@@@@@@@%%@@*%%***+=-+-:--::::=-+**+++++++++++++-.....:=******
            @@@@@@@%#*++**#%@@@@@@@@@@@@@@@@@#*%%%%%@@%@@@@@@#%@@@@@@@@@###%%#***+++***+***#+++*%%@%@@@@@@@@@@##*=*@%#+=*-+=-:::.:::+**++++++++++++++++===+++++++++
            @@@@@@@%#*+++*#%@@@@@@@@@@@@@@%#*-=+##%@@@@@%@%%@@@@%%@@@%%@@@@@%#*++++**+**+**#*+=*##@%%%%@@@@@%###%%%*%@%+*#*-.=+=+**=+++++++++++++++++++++++++++++++
            @@@@@@@%#*+++**#@@@@@@@@@@@@@@@*-:**#%@%##%@@@@@@@@@@@@@@@@@@@%%##***+**+=+++*#*===*#%@@@@@@@@@@%%%#+=-=+=+**+=+**+=*%#*+=+++++++++++++++++++++++++++++
            @@@@@@@%#*++++*#@@@@@@@@@@@@@@@@%##**@@@@@%%%%@@@@@@@@@@@@@%@#++*******+===++#*+==+*#%#@%%%@@@@@@@%*+.-*++=-*+:=++:-*#%*:++++++++++++++++++++++++++++++
            %%%%@@%%#*+++**#@@@@@@@@@@@@@@%%%#+#+=*%@%%%%%*++#%@@@@@@@@#*+++++**+++=====+*+====++*##%%%%%@@@@@@%%*-=+**%*+--*++*%#%#*#***+++++++++*###########*****
            *********+++++**##%%%%%%%%%%%%%%#**@@@%*#*%%#**%#%%@@@@@%%%###****+++*+=++++++=====+==+#*%%##%@@%@@%%%##*+#%***+**###+***###*++=====+*#%@@@@@@@%%%%%%%%
            ++++++++++++++++++++++***********=*@*%%#*#%%##%%%@@@@@%%@@%#%@@@@#***++**+==++==+++***##%%#%%*%@%#@@@@@@@@@###*##+=====******++=====+*#%@@@@@@%#**=...+
            +++++++++++++++++++++++++++++====+%@@@@@@@*%%%%*###%%@%%%%%#*@@@#+#%+++**++==*=++**#@@@@*#@%%%@@%%@@@@@@@@@@@@@@@@%######***+++=====+*#%%%@@%%#*+-.
            .
            ++++++++++++++++++++++++++=====--*@@@@#*#@@@@@@@@@%%%##****++**#*+++++*##*+==++++##*%%%#+#@%%#%%@@@%%@@@%@@@@@@@@@@@%%###**++=======++#%%%%%%%%#*+:...=
            ********++++++++++++++++++=======%#@@@@@@@@@@@@@@@##***++++++=======++*#*+===+++=++++==++++####%%%**#@@@@@@@@@@%@@@%%####*+==========+*#%%%%%##########
            %%%%%%##*+++++************+++++++%%@@@@@@@@@@@@@%#**++++===========++****+===================***+=+++#@@@@@@@@@@@@#######*+==-======++*#%%%%%%%%%%#####
            @@@@@@@#*+++++*#%@%%%%%%%%%%%%%##%@@@@@@@@@@@@@##**++==============++****+==============+=======---=+#@@@@@@@@@@@%%%%%%%#*+=========++#%%%%%%%%%%%%%%##
            @@@@@@%#*+++++*%@@@@@@@@@@@@@@@@%%%@@@@@@@@@@@%*+++++=============++*****+=================---------=#@@@@@@@@@@@@%%%%%%#*+=========++#%%%%%%%%%%%%%%%%
            @@@@@@%#*+++++*##%%%%%%%%%%@@@%%##*#@@%%@@@@@@%++++++=============+**##*+==---==========---------:--=#@@@@@@@%%@%%%%%%%%#**+========++#%%%%%%%%%%%%%%%%
            @@@@@@%#*+++++++****######%%%%%##**+@@@@@@@%@@%+++++++=======-====+###*++==---======------------:---=+#%@@@%%@@%%%%%%%%%#**+========+*#%%%%%%%%%%%%%%%%
            @@@@@@%#*++++=======+++**########**++@#@@%%%@@@++++++=====--=--==+****+==---::-=====----------------=*#%%@@@@@##**#######**+=========+*#%%#=--=*#%%%%%%
            @@@@@@%#*++==-:::::::--==++**####**++**%%@%%%#%++++++=====-----=++++=====------::-===---------------=+**#@%%#+++=---=+*****+=========+*###+-:..-+####%%
            %%%%%%%*++==-.
            ...::--==++******+++*#%@@@@@@*+++++=====----=++++++##*====+*+=-======------------=++==*@@@@%#=-:.::=+****+=========+*****+-....=*####
            ********++==:
            ...::--===+++***++++++@@@@@@@@++++++====---===++++*++===--------=====------------=---+%%#*=:::-:::-==++**+=========++++++++-...-++**#
            ***+++**+++==:.
            ....::--==+++****+++++%@@@@@@@@+++++++=========+++++===-=------------=------------@@@@@#+*-....:-==+++****+=========++**+++++========+
            +++++***++++=-:.....:::-==++++****++++++#@@@@@@@#++++++=======++++++====--------------------------+@@@@%#..
            ....:-+***###**++========+*###***+=--------
            +++++***++=+==-::::::---==+++*****++++++***%@@@@%+++++++=======++=+++=======----------------------*........
            .....:+######**+=========*###*++==-------::
            +++++***++====--::----====++++****++=++++%#@%%@@@+++++++======++++++++++++++++++==---------------=%..............:=**###***+==-======+##*+==-----==----
            +++++***+======--=======++++++****+====+++#@#@@@@@++++++======++#%##****+++******##+=------------%-...............=***##***+==-----==+***+=-----=====-=
            +++++***+=========++++++++++++***++=====+++*@@@@@@%++++++=======*##***++++++++====--------------#%-..............:-==+*#***+==-----==+**++==-----------
            -=++++*+====----==++++=-:::::-=+*+=======+++*%%@@@@#++++++====+=++*#*++++++==++=---------------#@#-....::::::::::--:-=+****+=-------=+++++==-----::::::
            -=++++*+=-------=+++++=-::::::-=*+=----==+++**#%%@@@%++++++++++++++++++++++===----------------+#*=......-========-:::-+****+=------=++*+=====--::::::::
            -=+++**+=----===+++***+=--:::-=+*+=------=++*###%%%@@#+++++++++++++===========---------------=:---::...::-===---=--::--==+++=-----=+*%#+====--:.......:
            ..:=+**+=----=====+++*++===++++**+====-::-=+*###%%@@@#+++++++===+==========----------------=@%-:-:::::::---:::::--::::::-=+==----=+*%@%#*++==-:::::::::
            ..:-*%#+=------::::=+**++++++++**+===--:.:-=+*##%@@@@#++++++++===========-------------------@@@@*:..:::::::......:::....:=+=----=+#@@@%#*****+++=======
            ==+*#%#+=----:......:=**+******#*+=-==--:--==+*%@@@@@#+++++++++==========-------------------@@@@@%::::::::::.....::::...:=+=--::-+%@%#+===+###****#****
            .::::::::.:::........:-=*#######*++++##+++*+==#@@@@@@#+++++++++==========---------:---------@@@@@@+---------::....::::::-++-:....-**++=======+**####%##
            ........................-*%%%%%%%##*#*+--=++==@@@@@@@#*+++++++++========--------------------@@@@@@%=====++++=::...::::--==-.....:-+++====-::.:-+***##%%
            ..-======-:....:.........=****##@@@%#+-::-=+=%@@@@@@@%**+++++++++===-====--------------:---=@@@@@@@====++*##*+=-:::::-=+*=:.....:-==++++==-:.::-===+**#
            ..=*+++++*+:...:....:....-==+++*#@@%%#*+++++*@@@@@@@@%#*++++++++++++=============----------*@@@@@@@#===++**####+-:::-=+#*=....:---==+**+++=-::::--=++**
            ...............::..::....=###*++*%%##*#**###%@@@@@@@@@#*+++++++++++=======----------------+%@@@@@%%*==-=+**#%%%*+=-==***+:....:----=+**+===-:..:-======
            .........................+#*+-:::=++***%%@@@@@@@@@@@@@%#*++++++++++====-----------------=+%@@@@@%%%#=-=:---+#%###+=++*+=:.....::::::-=+==---....::-----
            ..............
            ...............=*########%@@@@@@@@@@@@@%#*+++++++++=====---------------=+#@@@@%%%@%##*+===:---:++=--=-:::............:----:::...::---::
            ...........................-+###*##%###%%%%%@@@@@@@@@@@@%#*+++============-----------==*%@@@@%@@%%%%%%*=+==-----=:::-::--:...........::::::::....:-===-
            ------:::---==---=====-=+###*#####%###%%@@@@@@@@@@@@@@@@%%#**++=============------===+*@@@@@@@@@%%####*+=+--=-===----::-=--::::----------::::.....-----
            .:=+*+=-::::-=----+*****#*####%#%######%%%@@@@@@@@@@@@@@@@%##*+++++==========--====+*%@@@@@@@@@@%##*##***+====--===+=--=-::------=======----:::.::-::::
            :-+*#%#*=-::-=+++*****########%%###%#######%@@@@@@@@@@@@@@@%##****+++++========++++#@@@@@@@@@@@%###%%###*+++++===+=====--=-------------:::::::---------
            ::------:::-+***#########%%%###%%#%###%###%%%@@@@@@@@@@@@@@@@%#*****++++++++++++*#@@@@@@@@@@@@@%%%%%%***#+*+++=+==============---::::::::::--===+++===-
            .......:***##########%####%###%##%%%#%%#%%%@@@@@@@@@@@@@@@@@@@@@@%****+++++++*#%%@@@@@@@@@@@@@@%%%%##****#*****=++++=++=+=+====-=--=-::--=++**###**+=-:
            ::::-+**#####################%#%%###%##%%#%%@@@@@@@@@@@@@@@@@@@@@@@@@%####%%@@@@@@@@@@@@@@@@@@@%###*+*#**###*****++*++++++=====---===-::-+%%@%%%%##*=--
            ***######*####################%%#%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###****#######*#*****++++=++============----:=%@@@@@@%#*=
            +#########################%#%%%%#%%###%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#*##*####%%###%**###++***++*=+++++======-==-=---@@@%%%%*=
            ############################%%#%%%%#%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%####%%######%#####**#*****++=++==============-::+####*=
            ####%%%#######%#####%%#######%%%%%%%#%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%####%#%%%%%#%####%###*##*++****++=++++++=++====-=---##*+=
            ###%%%%###%%#%%##%%%##%%###%#%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%#*########%%%%%###*+*+###++++======+++++------:=++=
            ###%%%%%#%%%###%#%#%#####%##%%%%%%%@%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%#%@%#%%%%%%%#%%%#%###*#######*#+++=+=++++++=------:-##
            ####%%%%%%%%##%%%####%######%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%%%%%%%%%%%%%%%%%%####%%%%###***+*+***+===+=--------=
            ##%#%%%%#####%%%#####%%%#%%#%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%%%%%%%%@%@%@%%%#%##%#%%####****+**++======-===+-
            ##%%%%%%%%#%####%#%%%%%%%%%%%#%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%@%%%%@@@%%@%%@%%%@@%%%%%%***##***+*++=======++#+
            #####%%%%%%%%%%#%%%%%%%%%%%##%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%@%%%%%@%%%@@@@@@@@@%%@%@@@@@%**########*++======++##*
            %##%%%%%%%%%%%%%%%%@@@@@%%%%#%%%@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@@@%@%@@%%%%%%%@@@@@@@@@%@@@@@@@%%######%##++++===+++*#**
            %%%%#%%%%%%%%%%%%%@@@@@@@%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@%@@@@@@@@@@%@%@@@@@@@@@@@@@@@@@@@%%%%%%%%%%#***++++==-*****
            %#%%%%%%%%%%%%%@@@@@@@@@@@%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@@@@@@@@@@@%%%@@@@@@@@@@@@@@@@@@@%%%@%%%%%%#***++++=**##**
            %%%%%%%@@%%%%@@@@@@@@@@@@@@@%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@@%%%%#@%%##*++*+****#####
            %%%%%%%@@@@@@@@@@@@@@@@@@@@@@@%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@@@@@@@@@@@@@@@@%%%@@@@@@%%%#***++**###%%%#
            #%%%@%@@@@@@@@@@@@@@@@@@@@@@@%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%####****##%%@@@%
            %%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@%#@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@@@@@@@@@@@@@@@@@%@@@@@@@%%%##**##**#%%@@@@
            @%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%###*#*##%%%@@@@@
            %%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#@@@@@@%@@@@@@@@@@@@@@@@@@@%%%#*#####%%%%@@@@@
            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%#%*#%%%%@@@@@@%
            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%###%%@@@@@@%*
            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@@@@@@@@@@@@@@@@@@@%@@@@%%%##%%%%@@@@%#**
            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*++++*#@@@@@@@@@%#@@@@@@@@@@@@%%%%%%#%@%@@@%#**##
            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@********+*%@@@@%***++####@@@@@@@@%%%%%%@%@@@%**#*##
            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#**#***+*****#@@**###**###*#*#%@@@%@@%%%%@@@@@%####%%
            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#**+*+********#++****#####*##**@@@@@@@%%@@@@@@##%%%@@
            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#**#*+*#**+***##********#######@@@@@@@@%@@@@@@%%@@@@@
            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#*#*************#****##########@@@@@@%@@@@@@@@@@@@@@@
            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%***#*#***##*+***##**#########@@@@@@@@@@@@@@@@@@@@@@
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="animation-page" onClick={handlePageClick}>
        <div>
          <TypeAnimation
            cursor={false}
            preRenderFirstString={true}
            sequence={[
              "danny-jiang:~/ $ ",
              1500,
              "danny-jiang:~/ $ ls",
              1000,
              () => setShowText(true),
            ]}
            speed={50}
            className={`${CURSOR_CLASS_NAME} terminal-text`}
            style={{ fontSize: "14px" }}
          />
        </div>

        {showText && (
          <div
            className="terminal-text"
            style={{ fontSize: "14px", marginTop: "20px" }}
          >
            about experiences projects README.txt
          </div>
        )}

        {showCatCommand && (
          <div style={{ marginTop: "20px" }}>
            <TypeAnimation
              cursor={false}
              preRenderFirstString={true}
              sequence={[
                "danny-jiang:~/ $ ",
                cat_delay + 500,
                "danny-jiang:~/ $ cat README.txt",
              ]}
              speed={50}
              className="terminal-text"
              style={{ fontSize: "14px" }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Home;
