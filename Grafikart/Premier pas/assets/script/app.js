function render() {
    const title = React.createElement('h1', {}, 
    'Bonjour tout le monde',
    React.createElement('span', {}, 0)
)

// React
ReactDOM.render(title, document.querySelector('#app'))
}

render()

window.setInterval(() => {
    n++
    render()
})


//JS vanilla
// document.querySelector('#app').innerHTML
