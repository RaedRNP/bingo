<script>
    let { title, link = '#' } = $props()
</script>

<a href={link} class="btn" >
    {title}
</a>

<style>
    .btn {
        background: #138a36;
        cursor: pointer;
        text-decoration: none;
        padding: 1rem 2rem;
        margin: 8px 0;
        color: #fff;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        border-radius: 12px;
        transition: all 0.2s ease;
    }
    .btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: linear-gradient(#04e824, #18ff6d, #04e824);
        background-size: 800%;
        border-radius: 10px;
        filter: blur(5px);
        animation: glowing 60s linear infinite;
    }
    .btn:hover {
        background: #04e824;
    }
</style>