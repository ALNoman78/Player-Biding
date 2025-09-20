import PropTypes from 'prop-types'
import { IoPerson } from "react-icons/io5";
import { IoMdFlag } from "react-icons/io";

const PlayerCard = ({ player, handleChoosePlayer, selectedPlayers }) => {
    const { playerId , image, name, country, battingType, biddingPrice } = player;

    const isPlayerSelected = selectedPlayers.some(
        (selectedPlayer) => selectedPlayer.playerId === playerId
    );

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image}
                        alt="Shoes" className="w-full h-[200px] object-cover object-top rounded-xl" />
                </figure>
                <div className="card-body">
                    <div className='inline-flex items-center gap-5'>
                        <IoPerson />
                        <h2 className="card-title">{name}</h2>
                    </div>
                    <div className='flex justify-between items-center border-b pb-4'>
                        <div className='flex items-center gap-4'>
                            <IoMdFlag />
                            <p>{country}</p>
                        </div>
                        <button className='btn'>{battingType}</button>
                    </div>
                    <div>
                        <h3>Ratting</h3>
                        <div className='my-3'>
                            <div className='flex justify-between items-center gap-5'>
                                <h3 className='text-lg font-bold'>Price : {biddingPrice}</h3>
                                <div className="card-actions">
                                    <button
                                        className="btn btn-outline btn-success mt-4"
                                        onClick={() => handleChoosePlayer(player)}
                                        disabled={isPlayerSelected}
                                    >
                                        {isPlayerSelected ? "Selected" : "Choose Player"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

PlayerCard.propTypes = {
    player: PropTypes.object.isRequired,
    handleChoosePlayer: PropTypes.func.isRequired,
    selectedPlayers: PropTypes.array.isRequired,
}

export default PlayerCard
