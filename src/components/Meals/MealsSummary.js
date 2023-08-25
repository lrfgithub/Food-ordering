import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Enjoy Delightful Food Delivered!</h2>
      <p>
      Select your preferred dish from our extensive array of available meals and savor a delightful lunch or dinner at the comfort of your own home.
      </p>
      <p>
      Each of our meals is meticulously prepared using top-notch ingredients, prepared just before delivery, and, of course, crafted by skilled culinary experts!
      </p>
    </section>
  );
};

export default MealsSummary;