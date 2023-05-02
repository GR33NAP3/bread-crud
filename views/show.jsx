const React = require('react')
const Default = require('./layouts/default')

function Show({ bread }) {
    return(
        <Default>
            <h3>{bread.name}</h3>
            <img src={bread.image} alt={bread.name} />
            <p>
                and it {
                    bread.hasGluten ? <span> does </span> : <span> does not </span>
                } 
                have glutten
            </p>
            <li>
                <a href={'/breads'}> Go home</a>
            </li>
        </Default>
    )
}

module.exports = Show