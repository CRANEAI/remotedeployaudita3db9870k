const router = require("express").Router()
const passport = require("../auth")
const { db } = require("../../../utils")

//----------------------------------------------------------------------------------------------------------
//Endpoints
//----------------------------------------------------------------------------------------------------------

/**
 * @swagger
 * api/v1/createaccount/sign_up:
 *   post:
 *     tags:
 *       - name: sign_up
 *     description: sign_up
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: it works!
 */
router.post(
  "/sign_up",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    sign_up().then(result => {
      res.status(200).send(result)
    })
  }
)

/**
 * @swagger
 * sign_up():
 *
 */
sign_up = () => {
  return new Promise((resolve, reject) => {
    /* TODO - write sign_up function */
    resolve()

    /* TODO - handle sign_up error
                        reject({message: "error"})
                    */
  })
}
