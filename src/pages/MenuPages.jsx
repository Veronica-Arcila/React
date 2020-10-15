import React from 'react';
import { Link } from 'react-router-dom'

class MenuPages extends React.Component {
    render() {
        return (
            <div>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/menu" className="btn btn-primary">
                            Menú
              </Link>
                    </div>


                </div>
            </div>
        );
    }
}

export default MenuPages;