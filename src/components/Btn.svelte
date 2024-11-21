<script>
    let { title, link = '#' } = $props()
</script>

<a href={link} class="btn" >
    {title}
</a>

<style>
    :root {
        --button-bg: #0766AD;
        --hover-bg: #1097ff;
        --text-color-btn: #F5F5F5;
    }

    .btn {
        background: var(--button-bg);
        cursor: pointer;
        text-decoration: none;
        padding: 1rem 2rem;
        margin: 8px 0;
        color: var(--text-color-btn);
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        border-radius: 12px;
    }
    .btn:hover {
        background: var(--hover-bg);
    }
</style>