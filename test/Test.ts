import assert from "assert";
import { 
  TestHelpers,
  NadmonNFT_Approval
} from "generated";
const { MockDb, NadmonNFT } = TestHelpers;

describe("NadmonNFT contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for NadmonNFT contract Approval event
  const event = NadmonNFT.Approval.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("NadmonNFT_Approval is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await NadmonNFT.Approval.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualNadmonNFTApproval = mockDbUpdated.entities.NadmonNFT_Approval.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedNadmonNFTApproval: NadmonNFT_Approval = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      approved: event.params.approved,
      tokenId: event.params.tokenId,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualNadmonNFTApproval, expectedNadmonNFTApproval, "Actual NadmonNFTApproval should be the same as the expectedNadmonNFTApproval");
  });
});
