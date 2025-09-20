import PropTypes from 'prop-types'

const Selected = ({ selectedPlayers, handleRemovePlayer }) => {
    const totalPrice = selectedPlayers.reduce((total, player) => total + player.biddingPrice, 0);

    return (
        <div className="mt-5 p-4 border rounded-lg shadow-md bg-white">
            <h3 className="text-2xl font-bold mb-4 text-center">Your Team ({selectedPlayers.length} Players)</h3>
            {selectedPlayers.length === 0 ? (
                <p className="text-center text-gray-500">No players selected yet.</p>
            ) : (
                <>
                    <div className="space-y-3">
                        {selectedPlayers.map((player) => (
                            <div key={player.playerId} className="flex items-center justify-between p-3 border rounded-md bg-gray-50">
                                <div className="flex items-center gap-3">
                                    <img src={player.image} alt={player.name} className="w-12 h-12 object-cover rounded-full" />
                                    <div>
                                        <h4 className="font-semibold">{player.name}</h4>
                                        <p className="text-sm text-gray-600">Price: ${player.biddingPrice}</p>
                                    </div>
                                </div>
                                <button
                                    className="btn btn-sm btn-error"
                                    onClick={() => handleRemovePlayer(player)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 pt-4 border-t-2 border-gray-200 flex justify-between items-center">
                        <h3 className="text-xl font-bold">Total Team Value:</h3>
                        <p className="text-xl font-bold text-green-600">${totalPrice}</p>
                    </div>
                </>
            )}
        </div>
    )
}

Selected.propTypes = {
    selectedPlayers: PropTypes.array.isRequired,
    handleRemovePlayer: PropTypes.func.isRequired,
}

export default Selected