import { FC, useState, useEffect } from "react";
import styles from "./CurrencyPage.module.scss";
import Header from "../../components/Header/Header";
import { useCurrencies } from "../../hooks/useCurrencies";
import { useParams } from "react-router-dom";
import { getCurrencysHistory } from "../../api/currenciesRequests";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { useYourCryptos } from "../../hooks/useYourCryptos";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import { Link } from "react-router-dom";

interface History {
  priceUsd: string;
  time: number;
  date: string;
}

const CurrencyPage: FC = () => {
  const { currencies } = useCurrencies();
  const { id } = useParams();
  const { setIsBuyWindowShowed, isBuyWindowShowed, setIsCaseShowed } =
    useYourCryptos();
  const currency = currencies.filter((curr) => curr.symbol === id)[0];
  const [history, setHistory] = useState<History[]>([]);

  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
  );

  useEffect(() => {
    getCurrencysHistory(currency?.id).then((hist) => {
      setHistory(hist);
    });
  }, [currency?.id]);

  const capitalize = () =>
    currency?.id?.toUpperCase()?.slice(0, 1) + currency?.id?.slice(1);

  const handleClickBuyButton = () => {
    setIsCaseShowed(false);
    setIsBuyWindowShowed(true);
  };

  const handleClickOverlay = () => setIsBuyWindowShowed(false);

  const chartData = {
    labels: history.map((hist: History) => {
      return hist.date;
    }),
    datasets: [
      {
        label: `${currency?.symbol} to USDT`,
        data: history.map((hist: History) => {
          return hist.priceUsd;
        }),
        color: "#fff",
        borderColor: "#fff",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
    scales: {
      x: {
        display: false,
      },
    },
  };

  return (
    <div className={styles.wrapper}>
      {isBuyWindowShowed && (
        <>
          <div className={styles.overlay} onClick={handleClickOverlay}></div>
          <ModalWindow symbol={currency.symbol} price={currency.priceUsd} />
        </>
      )}
      <Header />
      <Link to="/">
        <button className={styles.back}>Go back</button>
      </Link>
      {currency ? (
        <div className={styles.main}>
          <div className={styles.left}>
            <h2>{capitalize() + " " + currency?.symbol}</h2>
            <p>Current price:</p>
            <p>
              1 {currency?.symbol} - {Number(currency?.priceUsd).toFixed(7)}{" "}
              USDT
            </p>
            <button onClick={handleClickBuyButton}>
              Buy {currency?.symbol}
            </button>
          </div>
          <div className={styles.graph}>
            <Line data={chartData} options={options} />
          </div>
        </div>
      ) : (
        <h1 className={styles.sorry}>
          Your currency is loading. Please hold on a second.
        </h1>
      )}
    </div>
  );
};

export default CurrencyPage;
