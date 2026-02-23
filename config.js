/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['94770611075','94781574894'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['pramaya_xx Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'pramaya_xx Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBD9l3rVGLkKEtERi0gr2iq0IurGPpRUAdVys6oAccJ/38Cenp6H3dnetyLJOHnynMz8DvKCMLzALTC+g5KSGnLcPXlbYmCAcRVFmII+QJBDYIBs6mpT9RwrYxSKeumNV4ckE4JrmJ73+handGGR6TopD/L5Cdz7oKxOKQl/A5hX07cNKquRNqfXLVIv3G6k/Xjtx/OrWy1mFM7mm13jDG7FE7h3iJBQksd2meAMU5gucOtCQr9GfzgL1EEi2pN9UmrSMpj2VuXrMCvC+nS5wR6KpGdSBMHaEr9Iv0QHd4QGYrQ9mcdMfIV5mLhHcYIHBzdQlsk2HKs+e7Zi036nz0icY+QgnHPC2y/rrs/1izR191rRsHjCz46MnqlLFfhsv9qSCudKe/SKOlj5xdeIH4PIrC9BCbfLQyT6NGldV9YWA9+tHUkYvNnj2IQve0udeb8Sd+nHrJz/j+7ZSp3Kzlqj9cslcFerxL010x6ZV+bcrm76WSgFHSZuLPvN1+hfBwoT1Cbx6xezjcsrn0s+kyazWk3X/v569A8uRae5ejmbn/Qhr+jvWIqHmshmPJzRQLq1jX2pGvlSaG26DOpl0qapQJXSIStSYz+LFIXoy3Rs38Ja8OLrsV0jafIcyUXAlvptJR0n8OiWpvn06OiMWwcBQ7z3AcUxYZxCToq8i0mq0gcQ1RscUswf8oI1LgSlx3zXRq4+3A09t8eyduiUt2phr8rXxCOj00SIm53yBPqgpEWIGcNoRhgvaLvEjMEYM2D8+Vcf5PjK343rysliH0SEMu7nVZkWEH24+vEThmFR5XzT5qHVPTAFhvAZxpyTPGadjlUOaZiQGlsJ5AwYEUwZ/tkhphgBg9MK/9xaq0Cd8IvZ1tW1Zw30QfYwhCBggJGiacJQFAVNNUThD/at6VBhWX7LMQd9kD6yNEFSBEWWBGmk6Y/ELn7/ya+DQ5hDkjJgAMu1bnmtWPb8JuphM51aXmxasQk++/kYjHfhp20Pbd+GPXPie9kumRzVobdpn3VxqapSL3YWumm/op0ckMPTP4AAA0iHXapqmjV6EeaOpm3Prd97e5sNCyFybnOhOTrTcmM72+gQaqzQlvLRrBcpr3kWHIWTtHm7ToJZ6Y0TtbiMobBOmYRN76mrhnBNQvxrsXPWG7FoxyfyVRyoeasmTnJd5uMXbjfhDPVkT8xy9lLjiJIG9prBPFSorMM8jFgQ+kf5EKMGDoNR7VfT+HTL1f3NjN9H9rEy6Y9TRR7D1DnVfUYEPzY/h51//+ncO+9uvoR7/xeIH6fkX9Zx/Mrq3Fd6dWyK9jw9eBLGZ5sl0Wq7xqguLKs2x/Z+h8QiA/f7X31QppBHBc2AAWCOaEEQ6ANaVN3AOnlU/KaYZcbO2IutrvEUMm5+LsGWZJhxmJXAEDVN1IfSUB+9Z7m0KGeQJd3xWCjJTAH3vwGTj/e0UgcAAA==',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
