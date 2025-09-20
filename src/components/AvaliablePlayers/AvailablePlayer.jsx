import PropTypes from 'prop-types'
import Selected from '../SelectedPlpayer/Selected'
import PlayerCard from '../ActivePlayer/PlayerCard'


const AvailablePlayer = ({ players, selectedPlayers, handleChoosePlayer, handleRemovePlayer, toggleHandler, isActive }) => {

    return (
        <div className='md:w-10/12 mx-auto md:my-10 my-6'>
            <div className='flex justify-between items-center'>
                <h3 className='font-bold text-2xl'>{isActive.cart ? 'Available Players' : 'Selected Player'} {isActive.length}</h3>

                <div className='flex items-center gap-3'>
                    <button className={isActive.cart ? 'btn btn-secondary mr-5' : 'btn'} onClick={() => toggleHandler('cart')}>Available</button>
                    <button className={isActive.cart ? 'btn' : 'btn btn-secondary mr-5'} onClick={() => toggleHandler('about')}>Selected ({selectedPlayers.length})</button>
                </div>
            </div>
            {isActive.cart ? (
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {players.map((player, idx) => (
                        <PlayerCard key={idx} player={player} handleChoosePlayer={handleChoosePlayer} selectedPlayers={selectedPlayers} />
                    ))}
                </div>
            ) : (
                <Selected selectedPlayers={selectedPlayers} handleRemovePlayer={handleRemovePlayer} />
            )}
        </div>
    )
}

AvailablePlayer.propTypes = {
    players: PropTypes.array.isRequired,
    selectedPlayers: PropTypes.array.isRequired,
    handleChoosePlayer: PropTypes.func.isRequired,
    handleRemovePlayer: PropTypes.func.isRequired,
    toggleHandler: PropTypes.func.isRequired,
    isActive: PropTypes.object.isRequired,
}

export default AvailablePlayer