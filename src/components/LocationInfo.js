function LocationInfo({label, location}) {
    const
        countryName = location.country_name || 'No data',
        city = location.city || 'No data',
        ip = location.ip || 'No data';

    return (
        <div className="card shadow app-card">
            <div className="card-header">
                <h6 className="card-title my-2 fw-bold">{label}</h6>
            </div>
            <div className="card-body">
                <p className="card-text">Country: {countryName}</p>
                <p className="card-text">City: {city}</p>
                <p className="card-text">IP: {ip}</p>
            </div>
        </div>
    );
}

export default LocationInfo;