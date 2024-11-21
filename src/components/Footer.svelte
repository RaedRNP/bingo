<footer>
    <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/">Créditos gratis</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">Creador de carta</a></li>
        <li><a href="/">Contactanos</a></li>
    </ul>
    <div class="line"></div>
    <div class="terms">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam debitis fuga recusandae incidunt adipisci ea rerum molestias consequuntur suscipit, temporibus cum sequi ab enim soluta qui repellendus fugiat corrupti nostrum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quo dolore libero quam in a officia ab voluptate impedit laboriosam enim, quos earum neque! Molestias perspiciatis reprehenderit possimus eaque quos!</div>
    <ul>
        <li><a href="/">Redes sociales</a></li>
        <li><a href="/">Redes sociales</a></li>
        <li><a href="/">Redes sociales</a></li>
        <li><a href="/">Redes sociales</a></li>
    </ul>
</footer>

<style>
    footer {
        width: 100%;
        height: 50vh;
        background: #ff5a5a;
        padding: 0 200px;
        align-content: center;
    }
    footer ul {
        margin: var(--margin-friend);
        display: flex;
        justify-content: space-around;
    }
    footer .line {
        width: 100%;
        background-color: black;
        height: 1px;
        margin: 32px 0;
    }
    .terms {
            margin: 16px 0;
        }
    @media (width <= 934px) {
        footer {
            height: fit-content;
            padding: 30px;
            text-align: center;
        }
        footer ul {
            flex-wrap: wrap;
            gap: 20px;
        }

    }
</style>