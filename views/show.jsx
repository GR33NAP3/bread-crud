const React = require('react')
const Default = require('./layouts/default')

function Show({ bread , index}) {
    return(
        <Default>
            <h3>{bread.name}</h3>
            <img src={bread.image} alt={bread.name} />
            <p>
                and it {
                    bread.hasGluten ? <span> does </span> : <span> does not </span>
                } 
                have gluten
            </p>
            <li>
                <a href={'/breads'}> Go home</a>
            </li>
            <form action={`/breads/${index}?_method=DELETE`} method="POST">
                <input type="submit" value="delete" />
            </form>
        </Default>
    )
}

module.exports = Show