FROM mongo
COPY ./licenses.json ./licenses.json
CMD  mongoimport --host mongodb --db AcmeDB --type json --file ./licenses.json --jsonArray
