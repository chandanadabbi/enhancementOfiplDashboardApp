import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetailsEle} = props
  const {name, id, teamImageURL} = teamDetailsEle

  return (
    <li className="team-item-bg">
      <Link to={`/team-matches/${id}`} className="link-bg">
        <img src={teamImageURL} alt={name} className="team-logo-bg" />
        <p className="team-name-para">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
