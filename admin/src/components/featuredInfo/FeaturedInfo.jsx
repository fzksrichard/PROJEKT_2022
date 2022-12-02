import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("sitedesigns/income");
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);



  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Bevétel</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{income[1]?.total} Ft</span>
          <span className="featuredMoneyRate">
            {Math.floor(perc)}%{" "}
            {perc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">A múlt hónaphoz képest</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Eladások</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">200 000 Ft</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">A múlt hónaphoz képest</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Költségek</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">100 000 Ft</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">A múlt hónaphoz képest</span>
      </div>
    </div>
  );
}