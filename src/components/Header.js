
function Header({onDarkModeClick, isDarkMode, setIsDarkMode}) {
    const clickHandler = () => {
        onDarkModeClick()
    }
    
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={clickHandler}>
            {isDarkMode ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}


export default Header;