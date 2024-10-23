<script>
    import { Router, Route } from "svelte-routing";
    import Home from "./routes/Home.svelte";
    import Gui from "./routes/Gui.svelte";
    import Api from "./routes/Api.svelte";
</script>

<Router basepath="/">
    <Route path="/" component={Home} exact />
    <Route path="/tvs/gui" component={Gui} />
    <Route path="/tvs/api" component={Api} />
</Router>
