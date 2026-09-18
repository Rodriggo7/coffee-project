import React from "react";

const ProfileCard = ({ userData }) => {
    const {
        name = "Usuario Anónimo",
        role = "Cliente",
        email = "sin@email.com",
        phone= "No proporcionado",
        avatar = "default-avatar.png"
    } = userData;

    return (
        <div className="profile-card">
            {/* Columna Avatar */}
            <div className="profile-avatar-col">
                <div className="avatar-wrapper">
                    <img src={avatar} alt={`Avatar de ${name}`} />
                </div>
            </div>

            {/* Columna Datos */}
            <div className="profile-info-col">
                <h2 className="profile-name">Mi Perfil - {name}</h2>
                
                <div className="info-group">
                    <label>Nombre:</label>
                    <div className="info-value">{name}</div>
                </div>
                <div className="info-group">
                    <label>Rol:</label>
                    <div className="info-value">{role}</div>
                </div>
                <div className="info-group">
                    <label>Email:</label>
                    <div className="info-value">{email}</div>
                </div>
                <div className="info-group">
                    <label>Teléfono:</label>
                    <div className="info-value">{phone}</div>
                </div>
                {/* btn opcional */}
                <button className="btn-edit">Editar Perfil</button>
            </div>
        </div>
    );
};

export default ProfileCard;