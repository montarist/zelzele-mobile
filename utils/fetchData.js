
import moment from 'moment';
import 'moment/locale/tr';
import 'moment-timezone';

export default async function fetchData(magnitude, callback, callback2 = null, setIsLoading) {
    setIsLoading(true);
    try {
        moment.locale('tr')
        moment().tz('Europe/Istanbul')
        const format24 = "YYYY-MM-DD HH:mm:ss"
        const date = moment().add(3, "hour")
        const end = date.format(format24)
        const start = date.subtract(3, 'day').format(format24)

        const url = new URL("https://deprem.afad.gov.tr/apiv2/event/filter")
        url.searchParams.append("start", start)
        url.searchParams.append("end", end)
        url.searchParams.append("orderby", "timedesc")
        url.searchParams.append("minmag", magnitude)

        const response = await fetch(url)
        const data = await response.json()

        const limitedData = data.slice(0, 100)

        callback(limitedData)
        if (callback2) {
            callback2(limitedData)
        }
    } catch (error) {
        console.log('Error', error);
    } finally {
        setIsLoading(false);
    }

}