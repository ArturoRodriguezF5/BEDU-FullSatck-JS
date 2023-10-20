import '../styles/header.css'

const Header = (props) => {
  return (
  <div>
    <h1 className="card-header-title header">
      {`Hay ${props.cant} tareas.`}
    </h1>
  </div>
)

}
export default Header;