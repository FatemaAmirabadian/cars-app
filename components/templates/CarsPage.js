import Card from "../modules/Card";
import styles from "./carsPage.module.css";

function CarsPage({ data }) {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <Card key={car.id} {...car} />
      ))}
    </div>
  );
}

export default CarsPage;