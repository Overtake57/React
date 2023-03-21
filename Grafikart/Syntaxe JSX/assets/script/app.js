let n = 0

function render() {
    const title = <h1>
        Bonjour les gens <span>{n}</span>
    </h1>
    // const title = React.createElement('h1', {},
    // 'Bonjour tout le monde ',
    // React.createElement('span',{},n)
    // )
    reactDOM.render(title,document.querySelector('#app'))
}

render()

window.setInterval(() => {
    n++
    render()
}, 1000)