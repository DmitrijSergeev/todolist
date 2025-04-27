import { ThemeProvider } from "./components/theme-provider/theme-provider"
import {ModeToggle} from "./components/mode-toggle/mode-toggle.tsx";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <ModeToggle/>
        </ThemeProvider>
    )
}

export default App
