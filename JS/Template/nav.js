const MENU = `
            <nav class="menu">
        <a href="index.html" id="logo"><img src="Imagenes/Logo.png" alt="logo Inkverse"></a>
        <input type="checkbox" name="menu" id="menu">

        <ul class="menu_lvl0">
            <li><a href="index.html">HOME</a></li>

            <li>

                <input type="checkbox" id="toggleA" class="menu-toggle">
                <label for="toggleA" class="plus1" id="plusA">
                    STORIES <img src="Imagenes/Flecha.png" alt="arrow">
                </label>

                <ul class="menu_lvl1">
                    <li><a href="synopsis.html">Synopsis</a></li>
                    <li>
                        <input type="checkbox" id="toggleB" class="menu-toggle">
                        <label for="toggleB" class="plus1" id="plusB">
                            CHARACTERS <img src="Imagenes/Flecha.png" alt="arrow">
                        </label>

                        <ul class="menu_lvl2">
                            <li><a href="storyA.html">Adventure</a></li>
                            <li><a href="StoryR.html">Romance</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><a href="Author.html">AUTHOR</a></li>
            <li><a href="FAQ.html">FAQ</a></li>
            <li><a href="Gallery.html">FANART</a></li>
        </ul>
        <label for="menu"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="gray" class="size-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg> </label>
        <!-- <img src="Imagenes/spill.png" alt=""> -->

    </nav>
    <img src="Imagenes/HR.png" class="navhr">
        `  ;

export { MENU };