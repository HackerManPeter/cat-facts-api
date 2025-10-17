import config from "../config";

const ipMap: Record<string, string> = {};

export default function (address: Bun.SocketAddress | null): boolean {
  let hasHitLimit = false;
  if (!address) return hasHitLimit;
  const now = new Date();

  const limitData = ipMap[address.address] || `${0}:${now}`;

  let requestsCount = Number(limitData.split(":")[0]);
  let lastRequest = Number(limitData.split(":")[1]) || now.getTime();

  requestsCount += 1;
  const fewMinutesAgo = new Date().setMinutes(
    now.getMinutes() - config.coolDownTime
  );

  const isWithinPeriod = lastRequest > fewMinutesAgo;
  const isMoreThanRequestLimit = requestsCount >= config.requestCountLimit;

  if (!isWithinPeriod) (requestsCount = 1), (lastRequest = now.getTime());

  if (isMoreThanRequestLimit && isWithinPeriod) hasHitLimit = true;

  ipMap[address.address] = `${requestsCount}:${lastRequest}`;
  return hasHitLimit;
}
