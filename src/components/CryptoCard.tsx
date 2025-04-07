import { Coin } from './CryptoList';

function CryptoCard({ coin }: { coin: Coin }) {
    return (
        <div className="border rounded p-4 shadow hover:shadow-lg transition">
            <div className="flex items-center gap-3">
                <img src={coin.image} alt={coin.name} className="w-8 h-8" />
                <h2 className="text-lg font-semibold">{coin.name}</h2>
            </div>
            <p>💲 {coin.current_price.toLocaleString()}</p>
            <p>📉 24h: {coin.price_change_percentage_24h.toFixed(2)}%</p>
            <p>🏦 Mkt Cap: {coin.market_cap.toLocaleString()}</p>
        </div>
    );
}

export default CryptoCard;
