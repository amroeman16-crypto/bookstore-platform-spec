import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Cart from "./pages/Cart";
import Authors from "./pages/Authors";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/books" component={Books} />
    <Route path="/books/:id" component={BookDetails} />
    <Route path="/cart" component={Cart} />
    <Route path="/authors" component={Authors} />
    <Route path="/blog" component={Blog} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster position="top-center" richColors /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
