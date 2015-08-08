Financial-Scraper
=================
Gathers financial data and saves it to postgres.

Currently gathers total domestic liabilities, total stock market cap, and historical sp500 data.

Using io.js 2.4+ and Postgres.
### Usage:

```
git clone https://github.com/robgraeber/financial-scraper.git && cd financial-scraper
(setup env variables)
npm start
```

Env variables:  
`DATABASE_URL`: Postgres connection string (required)

Postgres tables expected:   
```
corporate_liabilites
  date DATE
  value NUMERIC(10,2)
local_gov_liabilites
  date DATE
  value NUMERIC(10,2)
federal_gov_liabilites
  date DATE
  value NUMERIC(10,2)
household_liabilites
  date DATE
  value NUMERIC(10,2)
world_liabilites
  date DATE
  value NUMERIC(10,2)
nonfinancial_market_cap
  date DATE
  value NUMERIC(10,3)
financial_market_cap
  date DATE
  value NUMERIC(10,3)
sp_500_monthly
  date DATE
  price NUMERIC(10,2)
  dividend NUMERIC(15,12)
  earnings NUMERIC(15,12)
  cpi NUMERIC(12,8)
  gs10 NUMERIC(4,2)
  pe10 NUMERIC(4,2)
```