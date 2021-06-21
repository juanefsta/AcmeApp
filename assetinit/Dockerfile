FROM mongo
COPY ./assets.json ./assets.json
CMD  mongoimport --host mongodb --db AcmeDB --type json --file ./assets.json --jsonArray
