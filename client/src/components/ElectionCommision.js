function ElectionCommision() {
  return (
    <>
      <div>
        <form className="form" onSubmit>
          <label className="label2" htmlFor="start">
            Start Time:
          </label>
          <input className="innerBoxVote" type="text" id="start"></input>

          <label className="label2" htmlFor="end">
            End Time:
          </label>
          <input className="innerBoxVote" type="text" id="end"></input>

          <button className="regBtn" type="submit">
            Voting Start
          </button>
        </form>
      </div>
      <div className="space">
        <button className="emerBtn" onClick>
          Emergency
        </button>
        <button className="resBtn" onClick>
          Result
        </button>
      </div>
    </>
  );
}
export default ElectionCommision;
