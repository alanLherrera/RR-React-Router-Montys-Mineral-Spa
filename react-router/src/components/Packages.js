

export default function Packages() {
    const displayPackages = props.packages.map(eachPackage => <li>{eachPackage}</li>)
    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                </div>
                
            </div>
        </div>
    )
}