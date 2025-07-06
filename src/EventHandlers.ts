/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  NadmonNFT,
  NadmonNFT_Approval,
  NadmonNFT_ApprovalForAll,
  NadmonNFT_ExpeditionCompleted,
  NadmonNFT_Initialized,
  NadmonNFT_NadmonEvolved,
  NadmonNFT_NadmonMinted,
  NadmonNFT_OwnershipTransferred,
  NadmonNFT_PackMinted,
  NadmonNFT_PackPurchased,
  NadmonNFT_StatsChanged,
  NadmonNFT_Transfer,
  NadmonNFT_Upgraded,
} from "generated";

NadmonNFT.Approval.handler(async ({ event, context }) => {
  const entity: NadmonNFT_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    approved: event.params.approved,
    tokenId: event.params.tokenId,
  };

  context.NadmonNFT_Approval.set(entity);
});

NadmonNFT.ApprovalForAll.handler(async ({ event, context }) => {
  const entity: NadmonNFT_ApprovalForAll = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    operator: event.params.operator,
    approved: event.params.approved,
  };

  context.NadmonNFT_ApprovalForAll.set(entity);
});

NadmonNFT.ExpeditionCompleted.handler(async ({ event, context }) => {
  const entity: NadmonNFT_ExpeditionCompleted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    player: event.params.player,
    tokenId: event.params.tokenId,
    cookiesReward: event.params.cookiesReward,
  };

  context.NadmonNFT_ExpeditionCompleted.set(entity);
});

NadmonNFT.Initialized.handler(async ({ event, context }) => {
  const entity: NadmonNFT_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.NadmonNFT_Initialized.set(entity);
});

NadmonNFT.NadmonEvolved.handler(async ({ event, context }) => {
  const entity: NadmonNFT_NadmonEvolved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tokenId: event.params.tokenId,
    newEvo: event.params.newEvo,
    fusionPoints: event.params.fusionPoints,
  };

  context.NadmonNFT_NadmonEvolved.set(entity);
});

NadmonNFT.NadmonMinted.handler(async ({ event, context }) => {
  const entity: NadmonNFT_NadmonMinted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    tokenId: event.params.tokenId,
    packId: event.params.packId,
    sequence: event.params.sequence,
    nadmonType: event.params.nadmonType,
    element: event.params.element,
    rarity: event.params.rarity,
    hp: event.params.hp,
    attack: event.params.attack,
    defense: event.params.defense,
    crit: event.params.crit,
    fusion: event.params.fusion,
    evo: event.params.evo,
  };

  context.NadmonNFT_NadmonMinted.set(entity);
});

NadmonNFT.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: NadmonNFT_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.NadmonNFT_OwnershipTransferred.set(entity);
});

NadmonNFT.PackMinted.handler(async ({ event, context }) => {
  const entity: NadmonNFT_PackMinted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    player: event.params.player,
    packId: event.params.packId,
    sequence: event.params.sequence,
    tokenIds: event.params.tokenIds,
    paymentType: event.params.paymentType,
  };

  context.NadmonNFT_PackMinted.set(entity);
});

NadmonNFT.PackPurchased.handler(async ({ event, context }) => {
  const entity: NadmonNFT_PackPurchased = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    buyer: event.params.buyer,
    firstTokenId: event.params.firstTokenId,
    packSize: event.params.packSize,
    paymentMethod: event.params.paymentMethod,
  };

  context.NadmonNFT_PackPurchased.set(entity);
});

NadmonNFT.StatsChanged.handler(async ({ event, context }) => {
  const entity: NadmonNFT_StatsChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tokenId: event.params.tokenId,
    sequence: event.params.sequence,
    changeType: event.params.changeType,
    newHp: event.params.newHp,
    newAttack: event.params.newAttack,
    newDefense: event.params.newDefense,
    newCrit: event.params.newCrit,
    newFusion: event.params.newFusion,
    newEvo: event.params.newEvo,
    oldHp: event.params.oldHp,
    oldAttack: event.params.oldAttack,
    oldDefense: event.params.oldDefense,
    oldCrit: event.params.oldCrit,
    oldFusion: event.params.oldFusion,
    oldEvo: event.params.oldEvo,
  };

  context.NadmonNFT_StatsChanged.set(entity);
});

NadmonNFT.Transfer.handler(async ({ event, context }) => {
  const entity: NadmonNFT_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    tokenId: event.params.tokenId,
  };

  context.NadmonNFT_Transfer.set(entity);
});

NadmonNFT.Upgraded.handler(async ({ event, context }) => {
  const entity: NadmonNFT_Upgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    implementation: event.params.implementation,
  };

  context.NadmonNFT_Upgraded.set(entity);
});
